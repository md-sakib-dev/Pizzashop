import React, { useState ,useEffect} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Pizza tune.png";
import { Link } from "react-scroll";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import {
  FaInstagram,
  FaFacebookF,
  FaDribbbleSquare,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";

import pic1 from '../assets/gallery/pic1.jpg'
import pic2 from '../assets/gallery/pic2.jpg'
import pic3 from '../assets/gallery/pic3.jpg'
import pic4 from '../assets/gallery/pic4.jpg'
import pic5 from '../assets/gallery/pic5.jpg'
import pic6 from '../assets/gallery/pic6.jpg'

import { CiMenuKebab } from "react-icons/ci";

const Header = () => {
 
const [hideContactInfo, setHideContactInfo] = useState(false);
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setHideContactInfo(true);
    } else {
      setHideContactInfo(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  const [nav, setNav] = useState(false);
  const[gal,setGal]=useState(false)
  const pic=[
     {
       id:1,
       image:pic1,

     },
     {
       id:2,
       image:pic2,

     }, 
     {
       id:3,
     image:pic3,

     },
     {
      id:4,
    image:pic4,

    }
     ,{
      id:5,
    image:pic5,

    } 
    ,{
      id:6,
    image:pic6,

    }
  ]
  const Links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about us",
    },
    {
      id: 3,
      link: "menu",
    },
    {
      id: 4,
      link: "review",
    },
    {
      id: 5,
      link: "contact",
    },
   
  ];
  return (
    <div className="max-w-screen h-20 bg-white text-black fixed top-0 left-0 right-0 z-50">
    <div className="flex justify-center md:justify-around md:items-center">
      <div className="w-[80px] md:w-[150px]  hidden md:block ">
        <img className=" " src={logo} alt="" />
      </div>
      <div className="flex flex-col justify between items-center gap-3 mt-1">
      {!hideContactInfo && (
       <div className="hidden md:block">
        <div className="flex justify-between gap-8">
          <div className="flex justify-between gap-1"> 
          <BsFillTelephoneOutboundFill color="black"/>
          <p>0123456789</p>      
          </div>
          <div className="flex justify-between gap-1"> 
          <IoLocationSharp color="black"/>
          <p>5/10-b Block# A, Dhaka 1207</p>      
          </div>
          <div className="flex justify-between items-center gap-1">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitterSquare />
      </a>              
          </div>
        </div>
      </div>
      )}
        <div className="flex justify-between items-center gap-5">
      <ul className="hidden md:flex relative">
  {Links?.map(({ id, link }) => {
    return (
      <li
        key={id}
        className="relative px-4 cursor-pointer capitalize text-xl font-medium hover:scale-105 duration-500 text-black hover:text-orange-400 "
      >
        <Link to={link} smooth duration={500}> 
           {link}
           </Link>
        {/* Dots for hover effect */}
        <div className="flex justify-center">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </li>
      
    );
  })}
</ul>
<div onClick={()=>{setGal(!gal)}}>

<VscThreeBars className="hover-effect hidden md:block"size={30}/>
</div>
{gal &&(
  <div className="flex flex-col gap-2  fixed top-20 right-0 w-[30%] h-screen bg-white text-white ease-in-out duration-1000">
    <div className="flex justify-around mt-20">
   <div onClick={()=>{setGal(false)}}> <FaTimes size={30} color="black"/></div>
    <h1 className="text-xl font-bold text-black text-center">Gallery</h1>
    </div>
    <div className="grid grid-cols-2 gap-2 mt-5  gallery-container"> 

    {pic?.map((i) => {
            return (
             <div className="mr-0"> 
                  <img src={i.image} alt="" />
             </div>
            
            );
          })}
    </div>

  </div>
)}
      </div>

      </div>
    

      <div>
      </div>   
      <div className="flex justify-center  gap-5">

      <div
        onClick={() => {
          setNav(!nav);
        }}
        className="cursor-pointer  text-gray-500 md:hidden mt-5"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
          className="flex flex-col justify-start gap-2 items-center fixed top-20 left-0 w-[70%] h-screen bg-white text-black ease-in-out duration-1000"
        >
           <div className="flex flex-col justify-between gap-2 mt-2">
          <div className="flex justify-center gap-1"> 
          <BsFillTelephoneOutboundFill color="black"/>
          <p>01234567899</p>      
          </div>
          <div className="flex justify-center gap-1"> 
          <IoLocationSharp color="black"/>
          <p>5/10-b Block# A, Dhaka 1207</p>      
          </div>
          <div className="flex justify-center items-center gap-1">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitterSquare />
      </a>           
          </div>
        </div>
          {Links?.map((i) => {
            return (
              <li
                key={i.id}
                className="px-4 cursor-pointer capitalize py-4 text-4xl border-b border-b-gray-700 "
              >
                <Link
                  onClick={() => {
                    setNav(!nav);
                  }}
                  to={i.link}
                  smooth
                  duration={500}
                >
                  {i.link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
      <div>
        
      </div>
      <div className=" md:hidden">
        <img className="w-[100px]" src={logo} alt="" />
      </div>
      
      <div onClick={()=>{setGal(!gal)}}>

         <CiMenuKebab className="hover-effect md:hidden mt-5"size={30}/>
         </div>
         {gal &&(
  <div className="flex flex-col gap-2 md:hidden  fixed top-0 right-0 w-[60%] h-screen bg-white text-white ease-in-out duration-1000">
    <div className="flex justify-around mt-10">
   <div onClick={()=>{setGal(false)}}> <FaTimes size={30} color="black"/></div>
    <h1 className="text-xl font-bold text-black text-center">Gallery</h1>
    </div>
    <div className="grid grid-cols-2 gap-2 mt-5  gallery-container"> 

    {pic?.map((i) => {
            return (
             <div className="mr-0"> 
                  <img src={i.image} alt="" />
             </div>
            
            );
          })}
    </div>

  </div>
)}
      </div>
      
    </div>
  </div>
  );
};

export default Header;
