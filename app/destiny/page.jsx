import Banner from "@components/Banner";
import React from "react";

const PageDe = () => {
  return (
    <div className="min-h-max w-full text-black ">
      <Banner className="relative" />
      <div className="h-[400px] w-full flex flex-col justify-center items-center absolute top-0">
        <h1 className="text-4xl uppercase font-bold text-yellow-500 text-shadow-lg ">
          Our-Service
        </h1>
        <p className="text-white text-shadow-lg uppercase text-lg font-semibold">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="flex justify-center items-center gap-1 pb-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4 gap-2 pt-5">
          <div className="bg-serv-1 bg-cover bg-center w-[230px] h-[230px] rounded-lg shadow-xl">
            <h1 className="flex justify-center items-center w-full h-full text-slate-600 font-semibold uppercase">
              Lorem, ipsum.
            </h1>
          </div>
          <div className="bg-serv-1 bg-cover bg-center w-[230px] h-[230px] rounded-lg shadow-xl">
            <h1 className="flex justify-center items-center w-full h-full text-slate-600 font-semibold uppercase">
              Lorem, ipsum.
            </h1>
          </div>
          <div className="bg-serv-1 bg-cover bg-center w-[230px] h-[230px] rounded-lg shadow-xl">
            <h1 className="flex justify-center items-center w-full h-full text-slate-600 font-semibold uppercase">
              Lorem, ipsum.
            </h1>
          </div>
          <div className="bg-serv-1 bg-cover bg-center w-[230px] h-[230px] rounded-lg shadow-xl">
            <h1 className="flex justify-center items-center w-full h-full text-slate-600 font-semibold uppercase">
              Lorem, ipsum.
            </h1>
          </div>
          <div className="bg-serv-1 bg-cover bg-center w-[230px] h-[230px] rounded-lg shadow-xl">
            <h1 className="flex justify-center items-center w-full h-full text-slate-600 font-semibold uppercase">
              Lorem, ipsum.
            </h1>
          </div>
          <div className="bg-serv-1 bg-cover bg-center w-[230px] h-[230px] rounded-lg shadow-xl">
            <h1 className="flex justify-center items-center w-full h-full text-slate-600 font-semibold uppercase">
              Lorem, ipsum.
            </h1>
          </div>
          <div className="bg-serv-1 bg-cover bg-center w-[230px] h-[230px] rounded-lg shadow-xl">
            <h1 className="flex justify-center items-center w-full h-full text-slate-600 font-semibold uppercase">
              Lorem, ipsum.
            </h1>
          </div>
          <div className="bg-serv-1 bg-cover bg-center w-[230px] h-[230px] rounded-lg shadow-xl">
            <h1 className="flex justify-center items-center w-full h-full text-slate-600 font-semibold uppercase">
              Lorem, ipsum.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageDe;
