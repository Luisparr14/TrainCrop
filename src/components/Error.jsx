import React from 'react'
import propTypes from 'prop-types'

function Error ({ error }) {
  return (
    <div className="bg-red-300 text-red-700 p-4 rounded-md">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-red-500">An error has occurred</h1>
        <p className="text-red-500 font-medium">{error}</p>
      </div>
    </div>
  )
}

export default Error

Error.propTypes = {
  error: propTypes.object
}
