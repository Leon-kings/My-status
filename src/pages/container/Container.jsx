import React from "react";
React;
import image from "../../assets/images/images.png";
export default function Container() {
  return (
    <>
      <div className="w-full bg-black">
        <div className="text-center text-white pt-4 pb-8">
          <h2 className="text-3xl font-bold leading-tight text-whitesm:text-4xl xl:text-5xl font-pj">
            CONTACTS
          </h2>
          <p className="mt-4 text-base leading-7 text-white sm:mt-8 font-pj">
            Here are some Skills we can serve it through . Managed, secure &
            optimized for your applications.
          </p>
        </div>
        <div className="xl:mr-0 lg:mr-0 mr-0 w-full xl:w-full lg:w-full">
          <div className="relative overflow-hidden w-full xl:w-full md:w-full sm:w-full">
            <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
              <div className="relative mx-auto w-full px-4 sm:static sm:px-6 lg:px-8">
                <div className="grid w-full sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                  <div className="sm:max-w-lg">
                    <h1 className="text-4xl font-bold tracking-tight text-blue-400 sm:text-6xl">
                      LD Tech is Finally Here
                    </h1>
                    <p className="mt-4 text-lg text-white">
                      This year, our new summer collection will shelter you the
                      best magnificient Computers To advance technology Here in
                      Rwanda.
                    </p>
                    <br />
                    <p className="mt-4 text-lg text-white">
                      Check It out for Your best Wants.We glad to Offer you
                      Qualited Products
                    </p>
                  </div>
                  <div>
                    <div className="mt-10">
                      {/* Decorative image grid */}
                      <div className="pointer-events-none lg:inset-y-0 lg:mx-auto lg:w-full">
                        <div className="absolute transform sm:top-0 md:left-1/2 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                          <div className="flex items-center space-x-6 lg:space-x-8">
                            <div className="grid shrink-0 grid-cols-1 ">
                              <div className="h-44 w-40 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                <img
                                  src={image}
                                  className="size-fit object-cover"
                                />
                              </div>
                              <div className="h-44 w-40 overflow-hidden rounded-lg">
                                <img
                                  src={image}
                                  className="size-fit object-cover"
                                />
                              </div>
                            </div>
                            <div className="grid shrink-0 grid-cols-1 ">
                              <div className="h-44 w-40 overflow-hidden rounded-lg">
                                <img
                                  src={image}
                                  className="size-fit object-cover"
                                />
                              </div>
                              <div className="h-44 w-40 overflow-hidden rounded-lg">
                                <img
                                  src={image}
                                  className="size-fit object-cover"
                                />
                              </div>
                              <div className="h-44 w-40 overflow-hidden rounded-lg">
                                <img
                                  src={image}
                                  className="size-fit object-cover"
                                />
                              </div>
                            </div>
                            <div className="grid shrink-0 grid-cols-1 ">
                              <div className="h-44 w-40 overflow-hidden rounded-lg">
                                <img
                                  src={image}
                                  className="size-fit object-cover"
                                />
                              </div>
                              <div className="h-44 w-40 overflow-hidden rounded-lg">
                                <img
                                  src={image}
                                  className="size-fit object-cover"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
