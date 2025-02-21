import React from "react";
import { BiHome, BiRegistered } from "react-icons/bi";
React;
import logo from "../../assets/images/Black and Red Y2k Modern Professional Fashion Logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header className="w-full flex bg-black items-center ">
        <div className="w-full pt-4 px-4 md:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            <div className="w-40 h-30 object-center">
              <img src={logo} alt="" className="dark:hidden object-cover" />
              <img
                src={logo}
                alt=""
                className="hidden dark:block object-cover"
              />
            </div>
            <div className="flex w-full right-0 justify-end items-center ">
              <div className=" justify-end pr-16 gap-8 sm:flex lg:pr-0">
                <Link to={"/"} className="px-0 sm:px-2">
                  <button className="rounded-md bg-primary px-7 py-3 text-base font-medium text-white dark:text-white dark:bg-blue-400 hover:bg-primary/90">
                    <BiHome className="size-6" />
                  </button>
                </Link>
                <Link to={"/84930/84390"} className="px-2 sm:px-2">
                  <button className="rounded-md bg-primary px-7 py-3 text-base font-medium dark:text-white dark:bg-blue-400 text-white hover:bg-primary/90">
                    <BiRegistered className="size-6" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
