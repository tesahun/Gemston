"use client";

import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const WhatOfer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-sine", offset: 100 });
  });

  return (
    <div className="bg-slate-400 h-full pb-8 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center pt-11 ">
        <div
          className="pr-10 flex flex-col justify-center"
          data-aos="fade-right"
        >
          <h1 className="text-3xl font-semibold text-black text-center pl-8">
            About Us
          </h1>
          <p className="text-black text-center pl-8 pt-4">
            Welcome to Galgalu Gemstone Exporter, your trusted source for
            exquisite gemstones from the heart of Ethiopia. Founded with a
            passion for showcasing the natural beauty of Ethiopian gemstones to
            the world, we take pride in being a leading exporter of
            high-quality, ethically sourced gemstones.
          </p>
        </div>
        <div
          className="bg-care-1 bg-cover bg-center p-5 w-[300px] h-[220px] mt-5"
          data-aos="fade-left"
        ></div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center pt-11 ">
        <div
          className="pl-10 flex flex-col justify-center sm:order-first md:order-last"
          data-aos="fade-right"
        >
          <h1 className="text-3xl text-black text-center pr-8">Our Mission</h1>
          <p className="text-black text-center text-base pr-8 pt-4">
            At Galgalu Gemstone Exporter, our mission is to bring the brilliance
            of Ethiopian gemstones to the forefront of the international market.
            We are committed to providing our customers with ethically sourced
            gemstones of the highest quality, while fostering sustainable
            practices that benefit both the environment and local communities.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center pt-11 ">
        <div
          className="pl-10 flex flex-col justify-center sm:order-first md:order-last"
          data-aos="fade-right"
        >
          <h1 className="text-3xl text-black text-center underline pr-8">
            Why Choose Galgalu Gemstone Exporter?
          </h1>
          <div className="text-black text-center text-base pr-8 pt-4">
            <h1 className="font-semibold text-lg">
              1. Authentic Ethiopian Gemstones
            </h1>
            <p>
              We specialize in sourcing and exporting a wide variety of
              gemstones native to Ethiopia, including opals, sapphires,
              emeralds, and more.
            </p>
          </div>

          <div className="text-black text-center text-base pr-8 pt-4">
            <h1 className="font-semibold text-lg">2. Quality Assurance</h1>
            <p>
              Every gemstone undergoes rigorous testing and certification
              processes to guarantee its authenticity and value. When you choose
              Gelgelu Gemstone Exporter, you can trust that you are receiving a
              genuine and exceptional product.
            </p>
          </div>

          <div className="text-black text-center text-base pr-8 pt-4">
            <h1 className="font-semibold text-lg">3. Cultural Connection</h1>
            <p>
              Discover the magic of Ethiopian gemstones with Galgalu Gemstone
              Exporter. Whether you are a jewelry enthusiast, collector, or
              retailer, we invite you to explore our collections.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatOfer;
