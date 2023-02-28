import React, { useState } from 'react'
import propTypes from 'prop-types'

function Input ({ label, id, onChange, ...props }) {
  const [size, setSize] = useState(512)
  const handleChange = (evt) => {
    setSize(evt.target.value)
    onChange(evt)
  }

  return (
    <div className='w-full'>
      {label && <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{`${label}: ${size}`}</label>}
      <input
        id={id}
        onChange={handleChange}
        {...props}
        />
    </div>
  )
}

export default Input

Input.propTypes = {
  label: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  onChange: propTypes.func
}
