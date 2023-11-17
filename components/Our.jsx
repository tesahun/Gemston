import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Our = () => {
  return (
    <div className="bg-banner-1 bg-cover bg-center h-[300px] w-full">
      <div className="bg-gradient-to-t from-slate-100 w-full h-full">
        <div className="flex justify-center items-center gap-[50px] pt-20">
          <FaFacebook size={25} style={{ color: "#0000FF" }} className="icon" />
          <BsInstagram
            size={25}
            style={{ color: "#FF1493" }}
            className="icon"
          />
          <BsWhatsapp size={25} style={{ color: "#008000" }} className="icon" />
          <FaTiktok size={25} style={{ color: "#000000" }} className="icon" />
          <FaTelegramPlane
            size={25}
            style={{ color: "#4682B4" }}
            className="icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Our;
