import React, { useState } from "react";
import { BiLogIn, BiMenu, BiRegistered } from "react-icons/bi";
React;
import logo from "../../assets/images/Black and Red Y2k Modern Professional Fashion Logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="flex bg-black w-full items-center ">
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
              <div>
                <button
                  onClick={() => setOpen(!open)}
                  id="navbarToggler"
                  className={`${
                    open ? "navbarTogglerActive" : ""
                  } absolute right-4 top-1/2 md:hidden block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                >
                  <BiMenu className="size-6 text-white" />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg px-6 py-5 shadow dark:bg-dark-2 md:static md:w-auto md:flex md:items-center md:gap-6 lg:shadow-none lg:dark:bg-transparent ${
                    !open ? "hidden" : ""
                  }`}
                >
                  <ul className="block md:flex md:gap-6 dark:bg-white opacity-100 dark:text-white">
                    <li className="py-4 md:py-2">
                      <Link to={"/7493097"}>
                        <button className="text-white font-bold">
                          SERVICES
                        </button>
                      </Link>
                    </li>
                    <li className="py-4 md:py-2">
                      <Link to={"/8340u20u"}>
                        <button className="text-white font-bold">ABOUT</button>
                      </Link>
                    </li>
                    <li className="py-4 md:py-2 lg:hidden md:hidden">
                      <Link to={"/Login"}>
                        <button className="text-white font-bold">
                          SIGN IN
                        </button>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="hidden justify-end pr-16 gap-4 sm:flex lg:pr-0">
                <Link to={"/register"}>
                  <button className="px-7 py-3 text-base font-medium text-white hover:text-primary dark:text-white">
                    <BiLogIn className="size-6" />
                  </button>
                </Link>
                <Link to={"/register"}>
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
