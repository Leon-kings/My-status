/* eslint-disable react/prop-types */
import React from "react";
// import { motion } from 'framer-motion';
React;
import me from "../../assets/images/356202168_1515581109215839_7191836832866658358_n.jpg";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { BiEdit, BiEnvelopeOpen } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="w-full relative dark:text-white text-white pb-[110px] pt-[120px] dark:bg-dark lg:pt-[150px]">
        <div className="w-full">
          <div className="flex flex-wrap">
            <div className="w-full px-6 lg:w-5/12">
              <div className="hero-content ">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-10">
                  <span className="w-20 h-0.5 bg-white"></span>
                </div>
                <h2 className="mb-5 text-4xl text-center font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
                  Am Mr Leon , Software Developer And Graphic Designer
                </h2>
                <p className="mb-8 max-w-[480px] text-base text-center text-body-color dark:text-dark-6">
                  Software development is the process of designing and
                  implementing a software solution to satisfy a user. The
                  process is more encompassing than programming, writing code.
                </p>
                <div className="text-center lg:text-left mb-20 lg:mb-0">
                  <p className="font-normal text-white dark:text-white text-sm md:text-md xl:text-lg mb-10">
                    Hi, I’m Leon. I’m UI/UX Designer. If you are looking for
                    Designer <br />
                    to build your brands and grow your business Let’s shake
                    hands <br />
                    with me.
                  </p>
                  <p className="text-white text-center dark:text-white p-4">
                    Provide our customers with optimized user-friendly
                    experience to increase the efficiency of digital products.
                  </p>

                  <div className="space-y-5 mt-4 pt-6 lg:space-x-5 mb-10">
                    <Link className="block md:inline px-8 py-3 font-medium text-white text-lg rounded-md transiton ease-in-out duration-300">
                      <button className="text-white dark:bg-blue-400 dark:text-white font-bold">
                        Hire me
                      </button>
                    </Link>
                    <Link className="block md:inline px-8 py-3 font-medium hover:text-white transiton ease-linear duration-300">
                      <button className="text-white dark:text-white dark:bg-blue-400">
                        Read more
                      </button>
                    </Link>
                  </div>

                  <hr className="text-gray-500 mb-5" />

                  <div className="w-full flex">
                    <BsGithub className="size-6 w-44 " />
                    <BiEdit className="size-6 flex w-40" />
                    <FaFacebook className="size-6 w-44 " />{" "}
                    <BsWhatsapp className="size-6 w-44 " />
                    <BiEnvelopeOpen className="size-6 w-44 " />{" "}
                    <BsLinkedin className="size-6 w-44 " />
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block  lg:pt-0">
                  <img
                    src={me}
                    alt=""
                    className="w-full lg:ml-auto rounded-2xl shadow-2xl"
                  />
                  <span className="absolute -bottom-8 -left-8 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
