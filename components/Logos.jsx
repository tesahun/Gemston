import React from "react";

const Logos = () => {
  return (
    <div className="bg-slate-700 w-full h-[100px]  overflow-hidden flex justify-center">
      <div className="flex justify-center items-center w-[370px] h-full">
        <div className="flex justify-center items-center gap-5 w-full h-full animate-marquee">
          <div className="w-32 h-20 bg-logoo-bg bg-cover bg-center"></div>
          <div className="w-32 h-20 bg-minist-2 rounded-xl bg-cover bg-center"></div>
          <div className="w-32 h-20 bg-logoo-bg bg-cover bg-center"></div>
          <div className="w-32 h-20 bg-minist-2 rounded-xl bg-cover bg-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Logos;
