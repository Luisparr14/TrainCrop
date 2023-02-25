import React from 'react'
import { useDropzone } from 'react-dropzone'
import propTypes from 'prop-types'

const ACCEPTED_FILE_TYPES = {
  'image/*': ['.jpg', '.jpeg', '.png', '.webp']
}

function MyDropzone ({ onDrop, onDropRejected }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDropRejected,
    accept: ACCEPTED_FILE_TYPES
  })

  return (
    <div {...getRootProps()} className="m-3">
      <input {...getInputProps()} />
      <div className="max-w-xl">
        <label className={`flex justify-center sm:w-96 h-32 px-4 transition bg-primary-300 border-2 border-dashed rounded-md appearance-none cursor-pointer focus:outline-none hover:border-gray-400 ${isDragActive ? 'border-blue-900' : 'border-accent-200'}`}>
          <span className="flex items-center space-x-2">
            <span className="font-medium text-gray-900 flex flex-col justify-center items-center">
              {isDragActive
                ? <p>Drop the files here ...</p>
                : <>
                  <p>Drop files to Attach, or</p>
                  <span className="text-gray-900 mt-4 font-bold bg-purple-600 p-2 rounded-lg">browse files</span>
                </>
              }
            </span>
          </span>
        </label>
      </div>
    </div>
  )
}

export default MyDropzone

MyDropzone.propTypes = {
  onDrop: propTypes.func.isRequired,
  onDropRejected: propTypes.func.isRequired
}
