import React from "react";
React;
import me from "../../assets/images/356202168_1515581109215839_7191836832866658358_n.jpg";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { BiEnvelopeOpen } from "react-icons/bi";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa6";
import DownloadButton from "../../components/download/Download";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <div className="w-full text-white dark:bg-dark px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">
              Hello !! I am
              <b className="block text-blue-300 font-bold items-center justify-center md:justify-start gap-2 my-3">
                <label className="w-16 h-0.5 bg-white"></label> Leon
                <label className="w-16 h-0.5 bg-white"></label>
              </b>
              Software Developer & Graphic Designer
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-5">
              Hi, I’m Leon. I’m a UI/UX Designer. If you are looking for a
              designer to build your brand and grow your business, let’s
              connect!
            </p>
            <hr className="border-gray-500 mb-5" />
            <div className="flex justify-center md:justify-start space-x-4">
              <BsGithub className="size-6 w-20" />
              <BsWhatsapp className="size-6 w-20" />
              <BiEnvelopeOpen className="size-6 w-20" />
              <BsLinkedin className="size-6 w-20" />
              <FaFacebook className="size-6 w-20" />
            </div>
            {/*  */}
            <div className="flex pt-10 pb-8 gap-6 justify-center md:justify-start">
              <Link to={"/8340u20u"}>
                <button className="button p-4 text-white dark:bg-blue-400 dark:text-white">
                  Hire me
                </button>
              </Link>
              <Link to={"/84940/9802"}>
                <button className="button button p-4 text-white dark:bg-blue-400 dark:text-white">
                  Read about me{" "}
                </button>
              </Link>
              <DownloadButton
                fileUrl="../../assets/docs/CV.pdf"
                fileName="CV.pdf"
              />
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative inline-block">
              <motion.img
                src={me}
                alt="Leon"
                className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl rounded-2xl shadow-xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              />
              <span className="absolute -bottom-8 -left-8 -z-10 hidden md:block">
                {/* Decorative SVG */}
                <svg
                  width="93"
                  height="93"
                  viewBox="0 0 93 93"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {[...Array(25)].map((_, i) => (
                    <circle
                      key={i}
                      cx={(i % 5) * 22.5 + 2.5}
                      cy={Math.floor(i / 5) * 22.5 + 2.5}
                      r="2.5"
                      fill="#3056D3"
                    />
                  ))}
                </svg>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
