import React from "react";
React;
import image from "../../assets/images/images.png";
import image1 from "../../assets/images/nodejs-icon-2048x2048-rueyo8fw.png";
import image2 from "../../assets/images/images1.png";
import me from "../../assets/images/356202168_1515581109215839_7191836832866658358_n.jpg";
const Hero = () => {
  return (
    <>
      <div className="w-full relative text-white pb-[110px] pt-[120px] dark:bg-dark lg:pt-[150px]">
        <div className="w-full">
          <div className="flex flex-wrap">
            <div className="w-full px-6 lg:w-5/12">
              <div className="hero-content ">
                <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
                  Am Software Developer
                </h1>
                <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6">
                  Software development is the process of designing and
                  implementing a software solution to satisfy a user. The
                  process is more encompassing than programming, writing code.
                </p>
                <ul className="flex flex-wrap items-center"></ul>
                <div className="clients pt-16">
                  <div className="flex items-center rounded-2xl space-x-4">
                    <SingleImage imgSrc={image} />

                    <SingleImage imgSrc={image1} />

                    <SingleImage imgSrc={image2} />
                  </div>
                </div>
                <div className="w-full px-5 pt-12">
                  <h2 className="mainphoto text-white">Main Languages :</h2>
                  <ul className="new pt-8">
                    <li className="text-blue-400 font-bold">Js</li>
                    <li className="text-blue-400 font-bold">PHP</li>
                  </ul>
                  <h2 className="mainphoto pt-8 text-white">
                    Responsiveness :
                  </h2>
                  <ul className="new pt-4">
                    <li className="text-blue-400 font-bold">Tailwinds css</li>
                    <li className="text-blue-400 font-bold">Post css</li>
                  </ul>
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

const SingleImage = ({ imgSrc }) => {
  return (
    <>
      <div className="flex w-full items-center justify-center">
        <img src={imgSrc} alt="" className="h-20 w-20 rounded-2xl" />
      </div>
    </>
  );
};
