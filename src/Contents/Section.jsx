import React from "react";
import pic1 from "../assets/gallery/img6.jpg";
import pic2 from "../assets/gallery/img3.jpg";
import pic3 from "../assets/gallery/img5.jpg";
import pic4 from "../assets/gallery/img2.jpg";

const Section = () => {
  return (
    <div className="w-screen h-fit grid md:grid-cols-3 m-2 gap-4 ">
      <div class="relative rounded-xl overflow-hidden group">
        <img
          className="w-[550px] h-[480px] group-hover:blur-[2px] transition-all  duration-200 ease-out"
          src={pic1}
          alt=""
        />
        <div className="inset-0 absolute bg-black/40 opacity-0 scale-110 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 ease-out flex flex-col justify-center items-center">
          <h2 className="text-xl md:text-3xl font-bold text-white text-center">Neapolitan pizza</h2>
          <p class="text-lg font-bold text-white text-center">
            This one is the greatest one
          </p>
        </div>
      </div>
      <div className="relative rounded-xl overflow-hidden group">
        <img className="w-[550px] h-[480px] group-hover:blur-[2px] transition-all  duration-200 ease-out" src={pic2} alt="" />
        <div className="inset-0 absolute bg-black/40 opacity-0 scale-110 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 ease-out flex flex-col justify-center items-center">

        <h2 className="text-xl md:text-3xl font-bold text-white text-center">BBQ chicken pizza</h2>
        <p className="text-lg text-white font-bold text-center">This one is too good</p>
        </div>
      </div>
      <div className="flex flex-col  gap-5">
      <div className="relative rounded-xl overflow-hidden group">
          <img className="w-[450px] h-[230px]" src={pic3} alt="" />
        <div className="inset-0 absolute bg-black/40 opacity-0 scale-110 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 ease-out flex flex-col justify-center items-center">
        <h2 className="text-xl md:text-3xl font-bold text-white text-center">BBQ chicken pizza</h2>
          <p className="text-lg text-white font-bold text-center">This one is too good</p>

        </div>
      </div>
      <div className="relative rounded-xl overflow-hidden group">
          <img className="w-[450px] h-[230px]" src={pic4} alt="" />
        <div className="inset-0 absolute bg-black/40 opacity-0 scale-110 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 ease-out flex flex-col justify-center items-center">
        <h2 className="text-xl md:text-3xl font-bold text-white text-center">BBQ chicken pizza</h2>
          <p className="text-lg text-white font-bold text-center">This one is too good</p>

        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Section;
