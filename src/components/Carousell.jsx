import React from 'react'

const INSTRUNCTIONS = [
  {
    title: 'Upload your images',
    description: 'Drag and drop your images or click on the button to select them',
    type: 'video',
    source: 'https://res.cloudinary.com/luisparr14/video/upload/v1677944606/TRAINCROP%20Instructions/vfdujpqrxazerltgrpod.mp4'
  },
  {
    title: 'Choose your options',
    description: 'Choose the size of your images',
    type: 'video',
    source: 'https://res.cloudinary.com/luisparr14/video/upload/v1677944712/TRAINCROP%20Instructions/vynb7q45qip0lqdwncni.mp4'
  },
  {
    title: 'Download your images',
    description: 'Click on the download button to download your images or click on the image to see it and if you want to download it',
    type: 'video',
    source: 'https://res.cloudinary.com/luisparr14/video/upload/v1677944698/TRAINCROP%20Instructions/aehocu35dgnp6yovxfnj.mp4'
  },
  {
    title: 'Delete your images',
    description: 'Click on the delete button to delete all your images or in the corner there is a button to delete one image ❌',
    type: 'video',
    source: 'https://res.cloudinary.com/luisparr14/video/upload/v1677944581/TRAINCROP%20Instructions/c8gsssmh8ijusz7mzfv2.mp4'
  },
  {
    title: 'Don\'t touch the localStorage',
    description: 'We use localStorage to save your images (id\'s really) and if you delete it, you will lose all your images',
    type: 'image',
    source: 'https://res.cloudinary.com/luisparr14/image/upload/v1677947357/TRAINCROP%20Instructions/i5qcfmhehftuynppcdde.png'
  },
  {
    title: 'We only cut human faces',
    description: 'If you upload an image with a face that is not human, the image will be rejected',
    type: 'image',
    source: 'https://res.cloudinary.com/luisparr14/image/upload/c_scale,w_350/v1677949064/TRAINCROP%20Instructions/osf3qrbr3vhfl17esewx.png'
  },
  {
    title: 'Only one face per image',
    description: 'If you upload an image with more than one face, the image will be rejected',
    type: 'image',
    source: 'https://res.cloudinary.com/luisparr14/image/upload/c_scale,w_350/v1677950007/TRAINCROP%20Instructions/kukfntp8upyzvnqh2ydi.png'
  },
  {
    title: 'When you see the red color',
    description: 'It means that all your images have been rejected',
    type: 'image',
    source: ''
  },
  {
    title: 'When you see the yellow color',
    description: 'It means that some of your images have been rejected',
    type: 'image',
    source: ''
  },
  {
    title: 'Enjoy',
    description: 'Enjoy the app and if you have any questions, you can contact me',
    type: 'image',
    source: null
  }
]

function Carousell () {
  return (
    <div id="animation-carousel" className="relative sm:text-white" data-carousel="static">
      {/* <!-- Carousel wrapper --> */}
      <div className="relative h-[27rem] overflow-hidden rounded-lg sm:h-[32rem] md:h-[34rem]">
        {INSTRUNCTIONS.map((instruction, index) => {
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
                      ? <video className="w-full h-full" autoPlay loop>
                        <source src={source} type="video/mp4" />
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
