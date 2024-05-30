import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';
import pic4 from '../assets/pic4.jpg';
import pic5 from '../assets/pic3.jpg';
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
    const Data = [
        {
            img: pic1,
            icon: FaQuoteLeft,
            title: 'LUFFY',
            para: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, culpa.',
            label: 'Web Developer',
        },
        {
            img: pic2,
            icon: FaQuoteLeft,
            title: 'ZORO',
            para: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, culpa.',
            label: 'Web Developer',
        },
        {
            img: pic3,
            icon: FaQuoteLeft,
            title: 'SANJI',
            para: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, culpa.',
            label: 'Web Developer',
        },
        {
            img: pic4,
            icon: FaQuoteLeft,
            title: 'ITACHI',
            para: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, culpa.',
            label: 'Web Developer',
        },
        {
            img: pic5,
            icon: FaQuoteLeft,
            title: 'OBITO',
            para: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, culpa.',
            label: 'Web Developer',
        },
    ];

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='w-full h-fit mx-auto flex flex-col justify-center items-center px-4 py-10 lg:px-20 lg:py-20 bg-gray-300 gap-8' id='review'>
            <p></p>
            <h1 className='text-6xl font-normal text-black text-center'>Clients Review</h1>
            <div className='w-full h-fit'>
                <Slider {...settings}>
                    {Data?.map((item, index) => (
                        <div key={index} id='slider-boxes' className='bg-white rounded-xl p-10 flex flex-col justify-center items-center border-b-[6px] border-orange-500 transition ease-in-out duration-500 hover:scale-105'>
                            <div >
                                {/* {item.icon && <item.icon className='w-[40px] h-[40px]' />} */}
                                <img
                                            className='w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] rounded-full hover:brightness-100 hover:scale-110 object-cover'
                                            src={item.img}
                                            alt={item.title}
                                        />
                            </div>
                            <div className='flex flex-col justify-center items-center gap-2 mt-2'>
                                <p className='text-[17px] text-center'>{item.para}</p>
                                <div className='flex justify-center items-center gap-2'>
                                    <div id='icon-boxes' className='bg-orange-500 rounded-full p-4 hover:bg-cyan-500 cursor-pointer'>
                                        {item.icon && <item.icon className='w-[40px] h-[40px]' />} 
                                    </div>
                                    <div className='flex flex-col justify-between gap-1'>
                                        <h1 className='text-md font-bold'>{item.title}</h1>
                                        <p className='text-sm font-normal text-orange-400'>{item.label}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonial;
