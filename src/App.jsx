import React, { useState } from 'react'
import JSZip from 'jszip'
import debounce from 'lodash/debounce'
import MyDropzone from './components/DropZone'
import ResultImage from './components/ResultImage'
import { saveAs } from 'file-saver'
import { useUploadImages } from './hooks/useUploadImage'
import { getBase64 } from './utils'
import Loading from './components/Loading'
import Input from './components/Input'

function App () {
  const [loading, setLoading] = useState(false)
  const [imageIds, setImageIds] = useState([])
  const [width, setWidth] = useState(512)
  const [height, setHeight] = useState(512)
  const [percentage, uploadImage] = useUploadImages()

  const handleOnDrop = async (acceptedFiles) => {
    setLoading(true)
    let ids = []
    try {
      ids = await uploadImage({ files: acceptedFiles })
    } catch (error) {
      console.error(error)
    }
    setImageIds((prev) => [...prev, ...ids])
    setLoading(false)
  }

  const handleOnDropRejected = (rejectedFiles) => {
    console.log(rejectedFiles)
  }

  const handleDownloadAll = async () => {
    try {
      const zip = new JSZip()
      const imgs = zip.folder('images')

      for (const publicId of imageIds) {
        const response = await fetch(`https://res.cloudinary.com/luisparr14/image/upload/w_${width},h_${height},c_thumb,g_faces/${publicId}`)
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
    <div className='bg-bg-100 flex flex-col items-center justify-center h-screen overflow-hidden pt-5'>
      <header>
        <h1 className="text-primary-100 font-bold text-6xl md:text-6xl mb-2">
          Train
          <span className="text-text-200 text-6xl md:text-6xl">Crop</span>
        </h1>
      </header>
      <main className='flex flex-col items-center justify-center w-full flex-1 px-10 text-center'>
        <section className='flex flex-col max-w-lg w-full'>
          <Input
            label='Selet the size of the images (width)'
            name='width'
            type='range'
            min={256}
            max={1024}
            onChange={handleSetSize}
            className='w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
          />
          <Input
            label='Selet the size of the images (height)'
            name='height'
            type='range'
            min={256}
            max={1024}
            onChange={handleSetSize}
            className='w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
          />
        </section>
        <section className='flex flex-col max-w-lg w-full justify-center items-center'>
          <MyDropzone onDrop={handleOnDrop} onDropRejected={handleOnDropRejected} />
          <div className='h-12'>
          {
            loading && percentage !== 100
              ? (<Loading percentage={percentage} />)
              : (loading && <div role="status">
                  Wait a moment for the images to be processed
                </div>)
          }
          </div>
        </section>
        <div className='flex flex-wrap justify-center px-20 h-1/2 overflow-auto scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full max-h-96'>
          {imageIds?.map((publicId) => (
            <ResultImage key={publicId} publicId={publicId} width={width} height={height} />
          ))}
        </div>
        <div className='h-32'>
        {
          imageIds.length > 0 && (
            <button className='bg-primary-100 hover:bg-primary-300 text-text-100 hover:text-gray-900 font-bold py-2 px-4 rounded-full m-3' onClick={handleDownloadAll}>
              Download All
            </button>
          )
        }
        </div>
      </main>
    </div>
  )
}

export default App
