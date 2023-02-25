import React, { useState } from 'react'
import JSZip from 'jszip'
import debounce from 'lodash/debounce'
import MyDropzone from './components/DropZone'
import ResultImage from './components/ResultImage'
import { saveAs } from 'file-saver'
import { useUploadImages } from './hooks/useUploadImage'
import { getBase64 } from './utils'
import Loading from './components/Loading'

function App () {
  const [loading, setLoading] = useState(false)
  const [imageIds, setImageIds] = useState([])
  const [width, setWidth] = useState(512)
  const [height, setHeight] = useState(512)
  const [percentage, uploadImage] = useUploadImages()

  const handleOnDrop = async (acceptedFiles) => {
    setLoading(true)
    const ids = await uploadImage({ files: acceptedFiles })
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
    <div className='App bg-bg-200 flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl font-semibold text-text-100'>TrainCrop</h1>
      <input type="range" min="256" max="1024" name='width' onChange={handleSetSize} /> {width}
      <input type="range" min="256" max="1024" name='height' onChange={handleSetSize} /> {height}
      <MyDropzone onDrop={handleOnDrop} onDropRejected={handleOnDropRejected} />
      {
        imageIds.length > 0 && (
          <button className='bg-primary-100 hover:bg-primary-300 text-text-100 hover:text-gray-900 font-bold py-2 px-4 rounded-full m-3' onClick={handleDownloadAll}>
            Download All
          </button>
        )
      }
      {
        loading && percentage !== 100 && (
          <Loading percentage={percentage} />
        )
      }
      {
        loading && percentage === 100 && (
          <div role="status">
            Wait a moment...
          </div>
        )
      }
      <div className='flex flex-wrap justify-center px-20 h-1/2 overflow-auto scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
        {imageIds?.map((publicId) => (
          <ResultImage key={publicId} publicId={publicId} width={width} height={height} />
        ))}
      </div>
    </div>
  )
}

export default App
