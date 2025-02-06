import React from "react";
// image component
import image0 from "../../assets/images/356202168_1515581109215839_7191836832866658358_n.jpg";
import image1 from "../../assets/images/Screenshot.png";
import image2 from "../../assets/images/Screenshot1.png";
import Services from "../sercices/Services";
import Contact from "../contact/Contact";
// end of images
React;
export default function Home() {
  return (
    <div className="w-full sm:w-full md:w-full lg:w-full xl:w-full">
      {/* main container */}
      <section className="w-full sm:pb-16 lg:pt-8">
        <div className="px-4 mx-auto w-full sm:px-6 lg:px-8">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:grid-cols-2 gap-y-12 lg:gap-x-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl xl:text-6xl font-pj">
                ⫸ Am <span className="text-blue-200 font-bold">Leon</span> ,
                Software Developer Fluent in JavaScript .
              </h1>
              <p className="mt-4 text-base sm:text-lg text-gray-600 font-inter">
                Software Developer experienced in JavaScript, React and Node.js
                | Bringing life to your web applications |
              </p>
              <div className="relative py-6 snap-center scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
                <div className="overflow-hidden w-[300px] lg:w-[420px] transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
                  <div className="px-4 py-5 sm:p-5">
                    <div className="flex items-start lg:items-center">
                      <img
                        className="lg:h-24 w-14 h-14 lg:w-35 rounded-xl object-cvoer"
                        src={image1}
                        alt=""
                      />

                      <div className="flex-1 ml-4 lg:ml-6">
                        <p className="text-xs font-medium text-gray-900 lg:text-sm">
                          Shops-lovat
                        </p>
                        <p className="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
                          Leon is happy to Serve you Your Favourite Computers.
                          Choose the Best PC and Also If You want to Buy Your
                          repairment Kits.
                        </p>
                        <p className="mt-2 text-xs font-medium text-gray-500 lg:text-sm">
                          April 09, 2022
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative snap-center scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
                <div className="overflow-hidden w-[300px] lg:w-[420px] transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
                  <div className="px-4 py-5 sm:p-5">
                    <div className="flex items-start lg:items-center">
                      <img
                        className="lg:h-24 w-14 h-14 lg:w-35 rounded-xl object-cvoer"
                        src={image2}
                        alt=""
                      />

                      <div className="flex-1 ml-4 lg:ml-6">
                        <p className="text-xs font-medium text-gray-900 lg:text-sm">
                          Leon-cars
                        </p>
                        <p className="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
                          Leon is happy to Serve you Your Favourite Cars. Choose
                          the Best Cars and Also If You want to Buy Your
                          repairment Kits.
                        </p>
                        <p className="mt-2 text-xs font-medium text-gray-500 lg:text-sm">
                          April 09, 2022
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div>
              <img
                className="w-full rounded-2xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto"
                src={image0}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <div className="w-full">
        <Services />
      </div>
      <div className="w-full">
        <Contact />
      </div>
    </div>
  );
}
