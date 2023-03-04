import React from 'react'
import PropTypes from 'prop-types'

function Carousell ({ options }) {
  return (
    <div id="animation-carousel" className="relative sm:text-white" data-carousel="static">
      {/* <!-- Carousel wrapper --> */}
      <div className="relative h-[27rem] overflow-hidden rounded-lg sm:h-[32rem] md:h-[34rem]">
        {options.map((instruction, index) => {
          const { title, description, type, source } = instruction
          return (
            <div key={index} className="hidden duration-200 ease-linear overflow-y-auto" data-carousel-item>
              <div className="flex gap-4 flex-col items-center sm:justify-center text-center bg-bg-300 h-full">
                <section className='w-full flex flex-col justify-center'>
                  <h2 className="text-2xl font-semibold text-text-100">{title}</h2>
                  <p className="mt-2 text-text-100 font-semibold">{description}</p>
                </section>
                {source !== '' && (
                  <section className='w-full flex justify-center'>
                    {type === 'video'
                      ? <video className="w-full h-full" autoPlay={true}>
                        <source autoPlay src={source} type="video/mp4" />
                      </video>
                      : <img src={source} alt={title} className="" />
                    }
                  </section>
                )}
              </div>
            </div>
          )
        })}
      </div>
      {/* <!-- Slider controls --> */}
      <button type="button" className="opacity-20 absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg aria-hidden="true" className="w-4 h-4 sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button type="button" className="opacity-20 absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg aria-hidden="true" className="w-4 h-4 sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  )
}

export default Carousell

Carousell.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired
  })).isRequired
}
