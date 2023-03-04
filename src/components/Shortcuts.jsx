import React from 'react'
import PropTypes from 'prop-types'

function Shortcuts ({ onClose }) {
  const isMobile = window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)

  return (
    <>
      <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
        <h3 className="text-xl font-semibold text-text-100 dark:text-white">
          <p>Here are some shortcuts that you can use in the app (It is only one hehe 😅)</p>
        </h3>
        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={onClose}>
          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          <span className="sr-only">Close modal</span>
        </button>
      </div>
      <div className="h-96">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col items-center justify-center space-y-4">
            {isMobile && <p className="text-sm font-semibold text-red-600 dark:text-white">The shortcut is not available on mobile devices</p>}
            <p className="text-xl font-semibold text-text-100 dark:text-white">Press <span className="text-primary-300">?</span> to open the instructions</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Shortcuts

Shortcuts.propTypes = {
  onClose: PropTypes.func.isRequired
}
