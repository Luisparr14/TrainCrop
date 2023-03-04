import React, { useEffect, useState } from 'react'
import JSZip from 'jszip'
import { nets } from 'face-api.js'
import debounce from 'lodash/debounce'
import MyDropzone from './components/DropZone'
import ResultImage from './components/ResultImage'
import { saveAs } from 'file-saver'
import { useUploadImages } from './hooks/useImages'
import { useModal } from './hooks/useModal'
import { getBase64, getDropZoneErrors } from './utils'
import Loading from './components/Loading'
import Input from './components/Input'
import Error from './components/Error'
import Footer from './components/Footer'
import Modal from './components/Modal'
import Instructions from './components/Instructions'
import { CLOUDINARY_CLOUD_NAME } from './constants'
import { filterFilesWithFaces } from './utils/filterAcceptedFiles'

function App () {
  const [loading, setLoading] = useState(false)
  const [scaning, setScaning] = useState(false)
  const [error, setError] = useState(null)
  const [width, setWidth] = useState(256)
  const [height, setHeight] = useState(256)
  const [modelLoaded, setModelLoaded] = useState(false)
  const { imageIds, percentage, uploadImage, deleteImages, deleteImage } = useUploadImages()
  const { showModal, toggleModal } = useModal()

  useEffect(() => {
    const loadModel = async () => {
      setError({
        type: 'warning',
        message: 'Loading model to detect faces, this may take a few seconds depending on your internet connection',
        showTitle: false
      })
      await nets.ssdMobilenetv1.loadFromUri('/models')
      setModelLoaded(true)
      setError(null)
    }
    loadModel()
  }, [])

  const resetError = debounce(() => {
    setError(null)
  }, 7000)

  const handleOnDrop = async (acceptedFiles, rejectedFiles) => {
    try {
      setError(null)
      if (rejectedFiles.length) {
        const { errors } = rejectedFiles[rejectedFiles.length - 1]
        const error = getDropZoneErrors(errors[0])
        setError({
          type: acceptedFiles.length ? 'warning' : 'error',
          message: error
        })
        resetError()
        if (!acceptedFiles.length) return
      }
      setScaning(true)

      const { filesWithFaces, areImagesRejected } = await filterFilesWithFaces(acceptedFiles)

      if (areImagesRejected) {
        setError({
          type: 'warning',
          message: 'Some images were rejected because they did not contain faces or more than one face'
        })
        resetError()
      }
      setScaning(false)
      setLoading(true)

      if (filesWithFaces.length) {
        await uploadImage({ files: filesWithFaces })
      } else {
        setError({
          type: 'error',
          message: 'No images were accepted because they did not contain faces or more than one face'
        })
        resetError()
      }
    } catch (error) {
      console.error(error)
    }
    setLoading(false)
  }

  const handleDownloadAll = async () => {
    try {
      const zip = new JSZip()
      const imgs = zip.folder('images')

      for (const publicId of imageIds) {
        const response = await fetch(`https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_${width},h_${height},c_thumb,g_faces/${publicId}`)
        const data = await response.blob()
        const base64 = await getBase64(data)

        imgs.file(`${publicId}.jpg`, base64, { base64: true })
      }

      const content = await zip.generateAsync({ type: 'blob' })
      saveAs(content, 'images.zip')
    } catch (error) {
      console.error(error)
    }
  }

  const handleSetSize = debounce((evt) => {
    const { name, value } = evt.target
    switch (name) {
      case 'width':
        setWidth(parseInt(value))
        break
      case 'height':
        setHeight(parseInt(value))
        break
      default:
        break
    }
  }, 500)

  return (
    <div className='bg-bg-100 flex flex-col items-center justify-center'>
      <header className='mt-5'>
        <h1 className="text-primary-100 font-bold text-6xl md:text-6xl mb-2">
          Train
          <span className="text-text-200 text-6xl md:text-6xl">Crop</span>
        </h1>
      </header>
      <main className='flex flex-col items-center justify-center w-full flex-1 px-10 text-center'>
        <section className='flex flex-col sm:flex-row max-w-lg w-full gap-2'>
          <Input
            id={'input-width'}
            label={'Width'}
            name='width'
            type='range'
            min={256}
            max={1024}
            onChange={handleSetSize}
            className='w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
          />
          <Input
            id={'input-height'}
            label={'Height'}
            name='height'
            type='range'
            min={256}
            max={1024}
            onChange={handleSetSize}
            className='w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
          />
        </section>
        <section className='flex flex-col max-w-lg w-full justify-center items-center'>
          {modelLoaded && <MyDropzone onDrop={handleOnDrop} />}
          <div className='min-h-[64px] gap-y-3 w-full flex-col flex justify-center items-center'>
          {
            error && <Error error={error} />
          }
          {
            loading && <Loading percentage={percentage} />
          }
          {
            scaning && <span className='font-bold text-primary-300'>We are detecting faces...</span>
          }
          </div>
        </section>
      </main>
        <div className='flex gap-4 flex-wrap justify-center my-1 sm:px-20 h-1/2 overflow-auto scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full max-h-96'>
          {imageIds?.map((publicId) => (
            <ResultImage key={publicId} publicId={publicId} width={width} height={height} onDeleteImage={deleteImage} />
          ))}
        </div>
        <div className='h-10 my-2'>
        {
          imageIds.length > 0 && (
            <>
              <button className='bg-primary-100 hover:bg-primary-300 text-text-100 hover:text-gray-900 font-bold py-2 px-4 rounded-full h-10' onClick={handleDownloadAll}>
                Download All
              </button>
              <button className='bg-red-700 hover:bg-primary-300 text-text-100 hover:text-gray-900 font-bold py-2 px-4 rounded-full h-10 ml-2' onClick={deleteImages}>
                Delete All
              </button>
            </>
          )
        }
        </div>
        <Footer />
        <Modal show={showModal}>
          <Instructions onClose={toggleModal} />
        </Modal>
    </div>
  )
}

export default App
