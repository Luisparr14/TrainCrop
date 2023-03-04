import React from 'react'
import PropTypes from 'prop-types'

function Info ({ onClick }) {
  return (
    <div className="w-9 h-9 absolute right-2 top-2 cursor-pointer select-none" onClick={onClick}>
      <img className="w-full h-full relative" src="https://res.cloudinary.com/luisparr14/image/upload/v1677962105/Iconos/g6j8fcgrlw4zmtbk4ix6.png" alt="info" />
    </div>
  )
}

export default Info

Info.propTypes = {
  onClick: PropTypes.func
}
