import React from 'react'
import propTypes from 'prop-types'

function Error ({ error }) {
  const { type, message, showTitle = true } = error

  const getColor = () => {
    switch (type) {
      case 'error':
        return 'bg-red-300 text-red-700'
      case 'warning':
        return 'bg-yellow-300 text-yellow-700'
      case 'info':
        return 'bg-blue-300 text-blue-700'
      default:
        return 'bg-gray-300 text-gray-700'
    }
  }

  const getMessages = () => {
    switch (type) {
      case 'error':
        return 'An error has occurred'
      case 'warning':
        return 'Upps, something went wrong, but is not so bad'
      case 'info':
        return 'This is an information, don\'t worry'
      default:
        return 'An error has occurred, and we don\'t know what is it, RUN!'
    }
  }

  return (
    <div className={`p-4 rounded-md w-full ${getColor()}`}>
      <div className="flex flex-col justify-center items-center">
        {showTitle && <h1 className="font-bold text-gray-900">{getMessages()}</h1>}
        <p className="text-gray-900 font-medium">{message}</p>
      </div>
    </div>
  )
}

export default Error

Error.propTypes = {
  error: propTypes.object
}
