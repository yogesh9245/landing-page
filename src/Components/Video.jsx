import React from 'react'

const Video = ({ onPlayerClick }) => {


  return (
    <>
    <div className='flex items-center bg-gray-100'>
      <div className='h-56 w-56 align-items-center relative'>
        <div className='w-40 h-40 absolute left-80 bottom-15 top-10'>
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M40 0C17.9089 0 0 17.9086 0 40C0 62.0914 17.9089 80 40 80C62.0911 80 80 62.0914 80 40C80 17.9086 62.0911 0 40 0Z" fill="url(#paint0_linear_0_365)" />
            <path d="M53.825 42.1202L33.825 54.6202C33.4203 54.8729 32.9602 54.9999 32.5 54.9999C32.0831 54.9999 31.6656 54.8962 31.2878 54.6862C30.4931 54.2456 30 53.4093 30 52.4999V27.4999C30 26.5906 30.4931 25.7543 31.2878 25.3137C32.0825 24.8706 33.0542 24.8974 33.825 25.3796L53.825 37.8796C54.5556 38.3374 55 39.1382 55 39.9999C55 40.8616 54.5556 41.6626 53.825 42.1202Z" fill="white" />
            <defs>
              <linearGradient id="paint0_linear_0_365" x1="80" y1="100" x2="120" y2="20" gradientUnits="userSpaceOnUse">
                <stop stop-color="#6852ED" />
                <stop offset="1" stop-color="#BA43FC" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className=''>
          <h2 className='font-extrabold text-3xl absolute top-40 left-20 pl-40'>How it works</h2>
        </div>
      </div>
      </div>
    </>
  )
}

export default Video