import React from "react";
// import { Link} from "react-router-dom";
import image from "../../../assets/images/Screenshot2.png";
import image1 from "../../../assets/images/Screenshot1.png";
import image2 from "../../../assets/images/Screenshot.png";

React;
const Message = () => {
  return (
    <>
      <section className="relative bg-black dark:text-white w-full sm:w-full md:w-full lg:w-full xl:w-full">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 "></div>
        </div>

        <div className="relative mx-auto w-full p-4 lg:grid sm:grid-cols-1 lg:grid-cols-2">
          <div className="flex items-end pb-16 bg-black text-white pt-18 sm:px-4 lg:px-8 lg:pb-24 xl:pr-12">
            <div className="w-full mx-auto lg:mx-0">
              <p className="text-5xl sm:text-6xl lg:text-7xl">
                <img src={image} alt="" className="w-full" />
              </p>
              <h1 className="mt-10 flex text-xl font-bold text-white ">
                Leon Last Projects
              </h1>
              <p className="mt-6 text-base font-normal leading-7 text-white">
                Shop LD Center for electronics, PCs, laptops, Apple products,
                and much more. Enjoy in-store pickup, top deals, and expert
                same-day tech support.
              </p>
              <div className="relative inline-flex mt-10 group">
                <div className="absolute transitiona-all "></div>
                {/* <Link to={"/post"}> */}
                  <button className="inline-flex dark:bg-blue-400 relative items-center justify-center w-full sm:w-auto px-8 py-3 sm:text-sm text-base sm:py-3.5 font-semibold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                    Only for Admin
                  </button>
                {/* </Link> */}
              </div>
            </div>
          </div>

          <div className="relative flex items-end px-4 py-16 rounded-2xl shadow-2xl bg-gray-900 sm:px-6 lg:pb-24 lg:px-8 xl:pl-12">
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
              <p className="text-lg font-bold text-white">LAST PROJECTS</p>

              <div className="mt-6 space-y-5">
                <div className="overflow-hidden transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
                  <div className="px-4 py-5 sm:p-5">
                    <div className="flex items-start lg:items-center">
                      <img
                        className="lg:h-24 w-14 h-14 lg:w-30 rounded-xl object-cover"
                        src={image1}
                        alt=""
                      />
                      <div className="flex-1 ml-4 lg:ml-6">
                        <p className="text-xs font-medium text-gray-900 lg:text-sm">
                          Leon-cars
                        </p>
                        <p className="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
                          Leon is mostly happy to serve you better cars store .
                        </p>
                        <p className="mt-2 text-xs font-medium text-gray-500 lg:text-sm">
                          April 09, 2024
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
                  <div className="px-4 py-5 sm:p-5">
                    <div className="flex items-start lg:items-center">
                      <img
                        className="lg:h-24 w-14 h-14 lg:w-30 rounded-xl object-cvoer"
                        src={image2}
                        alt=""
                      />

                      <div className="flex-1 ml-4 lg:ml-6">
                        <p className="text-xs font-medium text-gray-900 lg:text-sm">
                          Shop-lovat
                        </p>
                        <p className="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
                          Leon is mostly happy to serve you better computer
                          store .
                        </p>
                        <p className="mt-2 text-xs font-medium text-gray-500 lg:text-sm">
                          April 09, 2024
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
                  <div className="px-4 py-5 sm:p-5">
                    <div className="flex items-start lg:items-center">
                      <img
                        className="lg:h-24 w-14 h-14 lg:w-30 rounded-xl object-cvoer"
                        src={image}
                        alt=""
                      />

                      <div className="flex-1 ml-4 lg:ml-6">
                        <p className="text-xs font-medium text-gray-900 lg:text-sm">
                          Leon-status
                        </p>
                        <p className="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
                          Leon is happly to show you how much capable are .
                        </p>
                        <p className="mt-2 text-xs font-medium text-gray-500 lg:text-sm">
                          April 09, 2025
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
                  <div className="px-4 py-5 sm:p-5">
                    <div className="flex items-start lg:items-center">
                      <img
                        className="lg:h-24 w-14 h-14 lg:w-30 rounded-xl object-cvoer"
                        src={image}
                        alt=""
                      />

                      <div className="flex-1 ml-4 lg:ml-6">
                        <p className="text-xs font-medium text-gray-900 lg:text-sm">
                          Hospital-seven-sigma
                        </p>
                        <p className="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
                          How a visual artist redefines success in graphic
                          design
                        </p>
                        <p className="mt-2 text-xs font-medium text-gray-500 lg:text-sm">
                          April 09, 2025
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
    </>
  );
};
export default Message;
