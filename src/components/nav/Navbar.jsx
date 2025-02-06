import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
React;
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="flex w-full items-center bg-white dark:bg-dark">
        <div className="w-full pt-4 px-4 md:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            <div className="w-60">
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-primary.svg"
                alt="logo"
                className="dark:hidden"
              />
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                alt="logo"
                className="hidden dark:block"
              />
            </div>
            <div className="flex w-full items-center justify-between">
              <div>
                <button
                  onClick={() => setOpen(!open)}
                  id="navbarToggler"
                  className={`${
                    open ? "navbarTogglerActive" : ""
                  } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                >
                  <BiMenu className="size-6 text-white" />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg px-6 py-5 shadow dark:bg-dark-2 md:static md:w-auto md:flex md:items-center md:gap-6 lg:shadow-none lg:dark:bg-transparent ${
                    !open ? "hidden" : ""
                  }`}
                >
                  <ul className="block md:flex md:gap-6">
                    <li className="py-4 md:py-2">
                      <button className="text-white font-bold">MENU</button>
                    </li>
                    <li className="py-4 md:py-2">
                      <button className="text-white font-bold">SERVICES</button>
                    </li>
                    <li className="py-4 md:py-2">
                      <button className="text-white font-bold">ABOUT</button>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="hidden justify-end pr-16 gap-4 sm:flex lg:pr-0">
                <button className="px-7 py-3 text-base font-medium text-white hover:text-primary dark:text-white">
                  SIGN IN
                </button>
                <button className="rounded-md bg-primary px-7 py-3 text-base font-medium text-white hover:bg-primary/90">
                  SIGN OUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
