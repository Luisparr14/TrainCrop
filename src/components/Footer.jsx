import React from 'react'
import CloudinaryLogo from './CloudinaryLogo'

function Footer () {
  return (
    <footer className='my-20 p-2 text-center text-gray-50 font-semibold'>
      <a href='https://cloudinary.com/' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center justify-center'>
        <span>
          Made with
        </span>
        <CloudinaryLogo />
      </a>
      <p>
        Made by <a href='https://github.com/Luisparr14' target='_blank' rel='noopener noreferrer'>
          <span className='hover:text-primary-100'>LuchoDev</span>
        </a>
      </p>
      <p>
      Hackathon organized by
        <a href='https://www.meetup.com/es-ES/ReactJS-Madrid/' target='_blank' rel='noopener noreferrer'>
          <span className='hover:text-blue-600'> Midudev </span>
        </a>
        and sponsored by
        <a href='https://www.cloudinary.com/' target='_blank' rel='noopener noreferrer'>
          <span className='hover:text-blue-400'> Cloudinary</span>
        </a>
      </p>
    </footer>
  )
}

export default Footer
