import React from "react";
// import { motion } from 'framer-motion';
React;
import me from "../../assets/images/356202168_1515581109215839_7191836832866658358_n.jpg";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { BiEnvelopeOpen } from "react-icons/bi";

const Hero = () => {
  return (
    <>
     <div className="w-full text-white dark:bg-dark px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">
            Hello !! I am
            <div className="block text-blue-300 font-bold flex items-center justify-center md:justify-start gap-2 my-3">
              <b className="w-16 h-0.5 bg-white"></b> Mr Leon
              <b className="w-16 h-0.5 bg-white"></b>
            </div>
            Software Developer & Graphic Designer
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-5">
            Hi, I’m Leon. <br /> I’m a UI/UX Designer. If you are looking for a designer to build your <br /> brand and grow your business, let’s connect!
          </p>
          <hr className="border-gray-500 mb-5" />
          <div className="flex justify-center md:justify-start space-x-4">
            <BsGithub className="size-6" />
            <BsWhatsapp className="size-6" />
            <BiEnvelopeOpen className="size-6" />
            <BsLinkedin className="size-6" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center md:justify-end">
          <div className="relative inline-block">
            <img
              src={me}
              alt=""
              className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-lg rounded-2xl shadow-xl"
            />
            <span className="absolute -bottom-8 -left-8 -z-10 hidden md:block">
              {/* Decorative SVG */}
              <svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                {[...Array(25)].map((_, i) => (
                  <circle key={i} cx={(i % 5) * 22.5 + 2.5} cy={Math.floor(i / 5) * 22.5 + 2.5} r="2.5" fill="#3056D3" />
                ))}
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;
