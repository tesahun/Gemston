"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";

import { useState } from "react";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-slate-800 bg-cover bg-center w-full h-screen overflow-hidden">
      <div className="flex flex-col justify-center items-center h-full w-full mt-10">
        <div>
          <h1 className="text-white text-4xl uppercase font-extrabold text-center mb-5 text-shadow-lg">
            Galgalu Gemstone Exporter
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-1 relative mt-5">
          <div className="bg-ston-1 bg-cover bg-center w-[115px] h-[220px] rounded-lg border-2 shadow-2xl mt-5"></div>
          <div className="bg-dimo-bg bg-cover bg-center w-[115px] h-[220px] border-2 rounded-lg shadow-lg"></div>
          <div className="bg-ston-3 bg-cover bg-center w-[115px] h-[220px] rounded-lg border-2 mt-5 "></div>
        </div>
        <div>
          <p className="text-white text-center container mx-auto mt-14">
            Welcome to our exclusive collection of breathtaking gemstones
            sourced directly from the rich and diverse landscapes of Ethiopia.
          </p>
        </div>
        
          <div className=" relative mt-12 mb-5 group">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur-lg group-hover:opacity-75 transition duration-200 animate-pulse"></div>
            <Link href="/#ourproducts">
               <button className=" relative px-8 py-4 bg-slate-800 rounded-lg leading-none flex items-center ">
                 <span className="text-white group-hover:text-slate-500 transition duration-200">
                   See all Gemstones &rarr;
                 </span>
               </button>
            </Link>
          </div>
        
      </div>
    </div>
  );
};

export default Hero;
