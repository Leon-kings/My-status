import React from "react";
import { BiRegistered } from "react-icons/bi";
React;
import logo from "../../assets/images/Black and Red Y2k Modern Professional Fashion Logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header className="w-full sm:w-full lg:w-full xl:w-full flex bg-black items-center ">
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
            <div className="flex w-full items-center justify-between">
              <div className=" justify-end pr-16 gap-4 sm:flex lg:pr-0">
                <Link to={"/84930/84390"}>
                  <button className="rounded-md bg-primary px-7 py-3 text-base font-medium text-white hover:bg-primary/90">
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
