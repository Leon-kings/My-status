import React from "react";
// image component
import image0 from "../../assets/images/356202168_1515581109215839_7191836832866658358_n.jpg";
import Services from "../sercices/Services";
import Contact from "../contact/Contact";
// end of images
React;
export default function Home() {
  return (
    <div className="w-full sm:w-full md:w-full lg:w-full xl:w-full">
      {/* main container */}
      <section className="w-full pb-12 sm:pb-16 lg:pt-8">
        <div className="px-4 mx-auto w-full sm:px-6 lg:px-8">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:grid-cols-2 gap-y-12 lg:gap-x-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl xl:text-6xl font-pj">
                A special credit card made for Developers.
              </h1>
              <p className="mt-4 text-base sm:text-lg text-gray-600 font-inter">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vehicula massa in enim luctus. Rutrum arcu.
              </p>

              <form action="#" method="POST" className="mt-6 sm:mt-8">
                <div className="relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="block w-full px-4 py-3 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent"
                    required
                  />
                  <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                    <button
                      type="submit"
                      className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600"
                    >
                      Get Free Card
                    </button>
                  </div>
                </div>
              </form>

              <div className="flex flex-wrap items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                <div className="flex items-center">
                  <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">
                    2943
                  </p>
                  <p className="ml-3 text-sm text-gray-900 font-pj">
                    Cards
                    <br />
                    Delivered
                  </p>
                </div>
                <div className="hidden sm:block">
                  <svg
                    className="text-gray-400"
                    width="16"
                    height="39"
                    viewBox="0 0 16 39"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="0.72265"
                      y1="10.584"
                      x2="15.7226"
                      y2="0.583975"
                    ></line>
                    <line
                      x1="0.72265"
                      y1="17.584"
                      x2="15.7226"
                      y2="7.58398"
                    ></line>
                    <line
                      x1="0.72265"
                      y1="24.584"
                      x2="15.7226"
                      y2="14.584"
                    ></line>
                    <line
                      x1="0.72265"
                      y1="31.584"
                      x2="15.7226"
                      y2="21.584"
                    ></line>
                    <line
                      x1="0.72265"
                      y1="38.584"
                      x2="15.7226"
                      y2="28.584"
                    ></line>
                  </svg>
                </div>
                <div className="flex items-center">
                  <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">
                    $1M+
                  </p>
                  <p className="ml-3 text-sm text-gray-900 font-pj">
                    Transaction
                    <br />
                    Completed
                  </p>
                </div>
              </div>
            </div>
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
        <Contact/>
      </div>
    </div>
  );
}
