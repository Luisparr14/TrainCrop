import React from 'react'
import PropTypes from 'prop-types'
import Carousell from './Carousell'
import { INSTRUCTIONS } from '../data/instructions'

function Modal ({ show, onClose }) {
  return (
    <div tabIndex="-1" aria-hidden="true" className={`fixed top-0 left-0 right-0 z-50 ${!show ? 'hidden' : 'md:flex'} w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full`}>
      <div className="relative m-auto w-full h-full max-w-3xl md:h-auto">
        <div className="relative bg-bg-300 rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-text-100 dark:text-white">
              <p>Here are some instructions and warnings 😉</p>
              <p className="text-primary-300">Please read them carefully 🙏 </p>
            </h3>
            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={onClose}>
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-3 space-y-6">
            <Carousell options={INSTRUCTIONS} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}
