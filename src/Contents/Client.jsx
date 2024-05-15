import React from 'react'
import vid from '../assets/Pizza/vid.mp4'
const Client = () => {
    return (
      <div className='relative md:w-screen h-screen flex flex-col justify-center gap-8 items-end' id='about'>
      <video autoPlay muted loop className="absolute inset-0 object-cover w-full h-full" style={{ zIndex: -1,  }} >
          <source src={vid} type="video/mp4" />
      </video>
      <div className=' bottom-0 md:mr-20 '>
          <h1 className={'md:text-5xl text-2xl text-wrap text-white w-96 font-normal '}>
          -30% on all salads & drinks
          </h1>
          <div className="flex flex-col gap-8 text-white">
              <p className='text-5xl'>
           
              </p>
              <div className='flex items-center gap-4 mb-5'>
                  <div className="w-16 h-1 bg-yellow-500"></div>
                  <p className="">
                  Taste some of the best PizzaHouse salads!
                  </p>
              </div>
          </div>
          <button className='px-6 py-6 rounded-md hover:bg-teal-600 bg-yellow-500 w-48 hover:text-black text-white mb-10 transition duration-100 ease-in'>Contact Us</button>
      </div>
  </div>
    )
}

export default Client