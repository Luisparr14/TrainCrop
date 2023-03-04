import React, { useState } from 'react'
import propTypes from 'prop-types'
import { CLOUDINARY_CLOUD_NAME } from '../constants'

function ResultImage ({ publicId, width, height, onDeleteImage }) {
  const [loading, setLoading] = useState(true)
  return (
    <div className='relative'>
      {!loading && <span title='Delete Image' onClick={() => onDeleteImage(publicId)} className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300 absolute right-0 m-0 cursor-pointer select-none">メ</span>}
      <a
        href={`https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_${width},h_${height},c_thumb,g_faces/${publicId}`}
        download
        target='_blank'
        rel='noreferrer'
      >
      <img
        key={publicId}
        src={`https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${loading ? 'e_blur:4000,' : ''}w_${width},h_${height},c_thumb,g_faces/${publicId}`}
        alt='uploaded'
        onLoad={() => setLoading(false)}
        className='h-44 object-contain rounded-lg'/>
      </a>
    </div>
  )
}

export default ResultImage

ResultImage.propTypes = {
  publicId: propTypes.string.isRequired,
  width: propTypes.number,
  height: propTypes.number,
  onDeleteImage: propTypes.func
}

ResultImage.defaultProps = {
  width: 256,
  height: 256,
  onDeleteImage: () => console.log('onDeleteImage')
}
