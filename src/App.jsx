import React from 'react'
import MyDropzone from './components/DropZone'

function App () {
  return (
    <div className='App bg-bg-200 flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl font-semibold text-text-100'>TrainCrop</h1>
      <MyDropzone />
    </div>
  )
}

export default App
