import React, { useState } from 'react'
import pic1 from '../assets/Menu/pic1.jpg'
import pic2 from '../assets/Menu/pic2.jpg'
import pic3 from '../assets/Menu/pic3.jpg'
import pic4 from '../assets/Menu/pic4.jpg'
import pic5 from '../assets/Menu/pic5.jpg'
import pic6 from '../assets/Menu/pic6.jpg'
import { FaLeaf } from "react-icons/fa";
import { GiHamburger } from "react-icons/gi";
import { LuPizza } from "react-icons/lu";
import { RiDrinksLine } from "react-icons/ri";
import { GiShrimp } from "react-icons/gi";

const Menu = () => {
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
            icon:LuPizza ,
          }, {
            name: 'Burger',
           image:pic3,
            icon:  GiHamburger,
          }, 
          {
            name: 'Deserts',
          image:pic4,
            icon: LuPizza,
          },
        {
          name: 'Drinks',
          image:pic5,
          icon: RiDrinksLine,
        },
        {
          name: 'Sea Food',
          image:pic6,
          icon: GiShrimp ,
        },
       
      ];    
      return (
        <div className='w-screeen h-fit mx-auto flex flex-col justify-center items-center px-4 py-10 lg:px-20 lg:py-20 bg-white gap-8' id='menu'>
        <p></p>
        <h1 className='text-6xl font-normal text-black text-center'>Our Menu</h1>
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
                className={`w-[80px] h-[80px] rounded-full p-3 ${
                  hoveredIndex === index ? 'bg-cyan-400 brightness-100' : 'bg-orange-500'
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

export default Menu