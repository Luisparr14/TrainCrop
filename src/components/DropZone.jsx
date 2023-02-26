import React from 'react'
import { useDropzone } from 'react-dropzone'
import propTypes from 'prop-types'
import { ACCEPTED_FILE_TYPES } from '../constants'

function MyDropzone ({ onDrop, onDropRejected }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDropRejected,
    accept: ACCEPTED_FILE_TYPES
  })

  return (
    <div {...getRootProps()} className="my-3 w-full">
      <input {...getInputProps()} />
      <label className={`flex justify-center w-full h-32 px-4 transition bg-primary-300 border-2 border-dashed rounded-md appearance-none cursor-pointer focus:outline-none hover:border-gray-400 ${isDragActive ? 'border-blue-900' : 'border-accent-200'}`}>
        <span className="flex items-center space-x-2">
          <span className="font-medium text-gray-900 flex flex-col justify-center items-center">
            {isDragActive
              ? <p>Drop all files that you want here</p>
              : <>
                  <p>Drop one or more files here, or click to select files</p>
                  <span className="text-gray-900 mt-4 font-bold bg-primary-200 p-2 rounded-lg">browse files</span>
                </>
            }
          </span>
        </span>
      </label>
    </div>
  )
}

export default MyDropzone

MyDropzone.propTypes = {
  onDrop: propTypes.func.isRequired,
  onDropRejected: propTypes.func.isRequired
}
