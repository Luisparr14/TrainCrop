import React from 'react'
import PropTypes from 'prop-types'

function Modal ({ show, children }) {
  return (
    <div tabIndex="-1" aria-hidden="true" className={`fixed top-0 left-0 right-0 z-50 ${!show ? 'hidden' : 'md:flex'} w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full`}>
      <div className="relative m-auto w-full h-full max-w-3xl md:h-auto">
        <div className="relative bg-bg-300 rounded-lg shadow dark:bg-gray-700">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
}
