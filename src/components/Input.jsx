import React from 'react'
import propTypes from 'prop-types'

function Input ({ label, id, ...props }) {
  return (
    <>
      {label && <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>}
      <input
        id={id}
        {...props}
        />
    </>
  )
}

export default Input

Input.propTypes = {
  label: propTypes.string.isRequired,
  id: propTypes.string.isRequired
}
