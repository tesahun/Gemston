import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

import Link from "next/link";

const Footer = () => {
  return (
    <div id="footer" className="bg-black w-full max-h-max text-slate-50">
      <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-center lg:gap-10">
        <div>
          <h1 className="text-2xl text-gray-200 text-center pt-4 font-semibold">
            Get in Touch
          </h1>
          <div className="flex justify-center gap-[50px] mt-10">
            <a href="https://www.facebook.com/profile.php?id=100076457315908">
              <FaFacebook
                size={25}
                style={{ color: "#0000FF" }}
                className="icon"
              />
            </a>

            <BsWhatsapp
              size={25}
              style={{ color: "#008000" }}
              className="icon"
            />
            <a href="">
              <FaTelegramPlane
                size={25}
                style={{ color: "#4682B4" }}
                className="icon"
              />
            </a>
          </div>

          <div className="flex flex-col items-center mt-5">
            <h1 className="font-semibold text-lg">Phone</h1>

            <h3>+0916581458</h3>
            <h3>+0916581457</h3>
          </div>
          <div className="flex flex-col items-center mt-5">
            <h1 className="font-semibold text-lg">Email</h1>
            <h3>tesfayet21@gmail.com</h3>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center mb-10">
          <h1 className="font-semibold text-lg">Our Adress</h1>
          <div className="lg:flex lg:gap-3">
            <p className="text-center lg:flex items-center">
              Ethiopia/Addis Ababa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
