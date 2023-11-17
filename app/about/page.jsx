import Banner from "@components/banner";
import { GiWorld } from "react-icons/gi";
import { AiOutlineTeam } from "react-icons/ai";
import { FaHandHoldingHeart } from "react-icons/fa";
import { GrServices } from "react-icons/gr";

const page = () => {
  return (
    <div className="min-h-max w-full text-black overflow-hidden">
      <Banner className="relative" />
      <div className="h-[400px] w-full flex flex-col justify-center items-center absolute top-0">
        <h1 className="text-4xl uppercase font-bold text-yellow-500 text-shadow-lg ">
          About Us
        </h1>
      </div>
      <div className="w-full flex flex-col justify-center items-center container mx-auto">
        <div className="md:flex justify-center items-center">
          <div className="container mx-auto bg-about-bg w-[400px] h-[400px] bg-cover bg-center flex"></div>
          <div className="pl-5">
            <h1 className="flex justify-start text-lg pl-8 font-semibold">
              Who We Are
            </h1>
            <p className="text-sm sm:container sm:max-auto xl:w-[600px] pb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              explicabo maiores iste enim ducimus cupiditate quas magnam
              suscipit aliquid laboriosam non quibusdam, rerum eligendi qui
              molestias. Dolorem tempore eveniet voluptates.
            </p>
            <h1 className="flex justify-start text-lg pl-8 font-semibold">
              What Sets Us Apart
            </h1>
            <p className="text-sm sm:container sm:max-auto xl:w-[600px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              explicabo maiores iste enim ducimus cupiditate quas magnam
              suscipit aliquid laboriosam non quibusdam, rerum eligendi qui
              molestias. Dolorem tempore eveniet voluptates.
            </p>
          </div>
        </div>
        <div className="flex pt-12 pb-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
            <div className=" bg-slate-300 p-4 rounded-lg shadow-lg">
              <AiOutlineTeam
                size={35}
                style={{ color: "#000000" }}
                className="icon mb-2"
              />
              <h1 className="text-sm font-semibold">Expertise</h1>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                officiis ipsam aliquam temporibus aperiam in dicta dolorum ea
              </p>
            </div>
            <div className=" bg-slate-300 p-4 rounded-lg shadow-lg">
              <GiWorld
                size={35}
                style={{ color: "#000000" }}
                className="icon mb-2"
              />

              <h1 className="text-sm font-semibold">Global Network</h1>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                officiis ipsam aliquam temporibus aperiam in dicta dolorum ea
              </p>
            </div>
            <div className=" bg-slate-300 p-4 rounded-lg shadow-lg">
              <FaHandHoldingHeart
                size={35}
                style={{ color: "#000000" }}
                className="icon mb-2"
              />
              <h1 className="text-sm font-semibold">Ethical Practices</h1>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                officiis ipsam aliquam temporibus aperiam in dicta dolorum ea
              </p>
            </div>
            <div className=" bg-slate-300 p-4 rounded-lg shadow-lg">
              <GrServices
                size={35}
                style={{ color: "#000000" }}
                className="icon mb-2"
              />
              <h1 className="text-sm font-semibold">Comprehensive Services</h1>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                officiis ipsam aliquam temporibus aperiam in dicta dolorum ea
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
