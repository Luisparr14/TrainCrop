import React from 'react'
import propTypes from 'prop-types'

function ResultImage ({ publicId, width, height }) {
  return (
    <div className='m-3'>
      <a
        href={`https://res.cloudinary.com/luisparr14/image/upload/w_${width},h_${height},c_thumb,g_faces/${publicId}`}
        download
        target='_blank'
        rel='noreferrer'
      >
      <img
        key={publicId}
        src={`https://res.cloudinary.com/luisparr14/image/upload/w_${width},h_${height},c_thumb,g_faces/${publicId}`}
        alt='uploaded'
        className='h-44 object-contain m-2 rounded-lg'/>
      </a>
    </div>
  )
}

export default ResultImage

ResultImage.propTypes = {
  publicId: propTypes.string.isRequired,
  width: propTypes.number,
  height: propTypes.number
}

ResultImage.defaultProps = {
  width: 512,
  height: 512
}
