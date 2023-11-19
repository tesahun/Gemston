"use client";
import { useState } from "react";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed left-0 top-0 w-full z-50">
      <nav className="">
        <div className="w-full px-1 sm:px-6 lg:px-8 bg-slate-500/50">
          <div className="flex items-center justify-between h-16 ">
            <Link href="/" rel="preload" className="navbarLi">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="bg-logoo-bg bg-cover bg-center p-7 ml-2 z-40"></div>
                </div>
              </div>
            </Link>
            
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link href="/" className="navbarLi">
                  Home
                </Link>
                <Link
                  href="/#ourproducts"
                  className="navbarLi"
                >
                  Products
                </Link>
                <Link
                  href="/#myform"
                  className="navbarLi"
                >
                  Contact-us
                </Link>
                <Link
                  href="/#faq"
                  className="navbarLi"
                >
                  FAQ
                </Link>
                <Link
                  href="/#whatofer"
                  className="navbarLi"
                >
                  About-us
                </Link>
                <Link
                  href="#footer"
                  className="navbarLi"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="md:hidden z-30">
              <button
                onClick={toggleNavbar}
                className="inline-flex items-center justify-center p-2 rounded-md shadow-xl icon text-gray-200 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                {isOpen ? (
                  <AiOutlineClose size={30} />
                ) : (
                  <AiOutlineMenuUnfold size={30} />
                )}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-slate-500 absolute top-16 right-0 left-0">
            <div className="px-2 pt-1 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="navbarMo">
                Home
              </Link>
              <Link href="/#ourproducts" className="navbarMo">
                Products
              </Link>
              <Link href="/#myform" className="navbarMo">
                Contact-us
              </Link>
              <Link href="/#faq" className="navbarMo">
                faq
              </Link>
              <Link href="/#whatofer" className="navbarMo">
                About-us
              </Link>
              <Link href="/#footer" className="navbarMo">
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
