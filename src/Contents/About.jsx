import React, { useState, useEffect } from 'react';
import image from '../assets/gallery/bg1.jpg'

const About = () => {
  return (
    <div className='md:w-screen h-fit   bg-cover bg-no-repeat' style={{backgroundImage:`url(${image})`}} id='about us'>
      <div className=' mt-20 mr-10 flex flex-col md:justify-end justify-center gap-10 items-center md:items-end'>

   <h1 className={'md:text-6xl text-4xl  text-white font-normal  mt-14  '}>
       Best atmosphere
      </h1>
        <div className="flex flex-col gap-8 text-white">
          <p className='text-2xl'>
          PizzaTune is the place of the best pizza and high-quality service.
          </p>
          <p className='text-2xl'>
          Delicious, innovative pizzas crafted with passion, delivered fresh to you!
          </p>
          <div className='flex  items-center gap-4 mb-5'>
          <div class="w-16 h-1 bg-cyan-400"></div>
          <p className="">
               Mark Jhon, Founder
          </p>
          </div>
         
        </div>
          <button className='px-4 py-4 rounded-md hover:bg-white bg-orange-500 hover:text-black text-white mb-10 transition duration-100 ease-in'>View Our Services</button>
  
      
      </div>
  </div>
  )
}

export default About