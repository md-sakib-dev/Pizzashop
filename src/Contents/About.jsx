import React, { useState, useEffect } from 'react';
import pic from '../assets/pic2.png'
import image from '../assets/gallery/bg1.jpg'

const About = () => {
  return (
    <div className='md:w-screen h-fit  flex flex-col justify-end gap-24 items-end bg-cover bg-no-repeat' style={{backgroundImage:`url(${image})`}} id='about'>
      <div className=' mt-20 mr-10'>

   <h1 className={'md:text-6xl text-2xl  text-white font-normal  mt-14  '}>
       Best atmosphere
      </h1>
        <div className="flex flex-col gap-8 text-white">
          <p className='text-2xl'>
          PizzaHouse is the place of the best pizza and high-quality service.
          </p>
          <p className='text-2xl'>
          pizza and high-quality service.
          </p>
          <div className='flex  items-center gap-4 mb-5'>
          <div class="w-16 h-1 bg-yellow-500"></div>
          <p className="">
               Ben Smith, Founder
          </p>
          </div>
         
        </div>
          <button className='px-4 py-4 rounded-md hover:bg-yellow-500 bg-cyan-500 hover:text-black text-white mb-10 transition duration-100 ease-in'>View Our Services</button>
  
      
      </div>
  </div>
  )
}

export default About