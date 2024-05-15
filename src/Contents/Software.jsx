import React, { useState } from 'react'
import pic1 from '../assets/software/acount1.jpg'
import pic2 from '../assets/software/card.jpg'
import pic3 from '../assets/software/chain.jpg'
import pic4 from '../assets/software/erp.jpg'
import pic5 from '../assets/software/new.jpg'

import pic6 from '../assets/software/hrm.jpg'
import pic7 from '../assets/software/hrm.jpg'
import { FaLeaf } from "react-icons/fa";
import { GiHamburger } from "react-icons/gi";
import { LuPizza } from "react-icons/lu";

const Software = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
    const softwareList = [
        {
          name: 'Salads',
          image:pic1,
          icon:FaLeaf ,
        },
        {
            name: 'Pizzas',
          image:pic2,
            icon: GiHamburger,
          }, {
            name: 'Burger',
           image:pic3,
            icon:LuPizza,
          }, 
          {
            name: 'Deserts',
          image:pic4,
            icon: LuPizza,
          },
        {
          name: 'Drinks',
          image:pic5,
          icon: GiHamburger,
        },
        {
          name: 'Sea Food',
          image:pic6,
          icon: FaLeaf,
        },
       
      ];    
      return (
        <div className='w-screeen h-fit mx-auto flex flex-col justify-center items-center px-4 py-10 lg:px-20 lg:py-20 bg-white gap-8' id='services'>
        <p></p>
        <h1 className='text-6xl font-normal text-black text-center'>Our Services</h1>
        <p className='text-xl text-black text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, corporis.</p>
        <div className='w-full h-fit grid md:grid-cols-3 gap-8'>
            {
                softwareList?.map((item,index)=>{
                    return(
                        <div key={index}  className='relative rounded-xl  bg-cover bg-no-repeat w-[350px]   h-[200px] transition ease-in-out duration-500 hover:scale-105'  style={{backgroundImage:`url(${item.image})`}}  onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}>
                           <div id='icon-boxes' className=' absolute inset-0 flex flex-col bg-black/40 justify-center items-center gap-2 '>
                          {/* <img src={item.image} className='w-[300px] h-[200px]' alt="" /> */}
                          {item.icon && <item.icon
                className={`w-[80px] h-[80px] rounded-full p-4 ${
                  hoveredIndex === index ? 'bg-cyan-400 brightness-100' : 'bg-yellow-500'
                } hover:bg-cyan-400 brightness-100`}
              />}
                          <h1 className='text-xl text-white  font-normal'>{item.name}</h1>

                           </div>
                        </div>
                    )
                })
            }
           

        </div>

        </div>
      );
    };  

export default Software