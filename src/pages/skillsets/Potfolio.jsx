/* eslint-disable react/prop-types */
import React from "react";
import image from "../../assets/images/Screenshot.png";
import image1 from "../../assets/images/Screenshot1.png";
import image2 from "../../assets/images/Screenshot2.png";
import image3 from "../../assets/images/hospital-seven.png";
import image5 from "../../assets/images/weather.png";
import image6 from "../../assets/images/real-estate.png";
import image7 from '../../assets/images/react-weather.png'
import todo from '../../assets/images/todo.png'
import { Link } from "react-router-dom";
React;
const Blog = () => {
  return (
    <>
      <section className="w-full dark:text-white bg-black px-4 text-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="w-full">
          <div className=" flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <h2 className="mb-2 block text-lg font-semibold text-primary">
                  PORTFOLIO
                </h2>
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Our Recent Projects
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  Creating a portfolio is a good way of growing your online
                  presence. The portfolio is used to showcase your skills and
                  projects.
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-wrap">
            <BlogCard
              CardTitle="COMPUTERS STORE"
              CardDescription="LD Computer Store Rwanda Limited is a Full-Service Technology Services Provider also called the Top IT Consulting Company in Kigali, Rwanda."
              frameWork="React + Tailwinds + Nodejs + Material UI"
              image={image}
              link="https://shops-lovat.vercel.app/"
            />
            <BlogCard
              CardTitle="CARS STORE"
              CardDescription="Leon is happy to serve you Your favourate Cars , Choose The Best Cars You want and Your repairment Kits."
              frameWork="React + CSS + Nodejs"
              image={image1}
              link="https://leon-car.vercel.app/"
            />
            <BlogCard
              CardTitle="LEON-STATUS"
              CardDescription="Software development is the process of designing and implementing a software solution to satisfy a user."
              frameWork="React + Tailwinds + Nodejs"
              image={image2}
              link="https://leon-status.vercel.app/"
            />
            <BlogCard
              CardTitle="MEDIPLUS"
              CardDescription="Software development is the process of designing and implementing a software solution to satisfy a user."
              frameWork="React + Tailwinds + Nodejs"
              image={image3}
              link="https://hospital-seven-sigma.vercel.app/"
            />
            {/*  */}
            <BlogCard
              CardTitle="TODO LIST"
              CardDescription="App that save for you a plan , you want to be performing in upcomming time .So that you can see you inputed tasks."
              frameWork="React + CSS + Cookies"
              image={todo}
              link="https://todolist-ld.vercel.app/"
            />
            {/*  */}
            <BlogCard
              CardTitle="WEATHER APP"
              CardDescription="This is Weather app which can help to check out Daily temperature of you region."
              frameWork="Java script + html + Weather API"
              image={image5}
              link="https://weather-silk-nu.vercel.app/"
            />
            {/*  */}
            <BlogCard
              CardTitle="REAL-ESTATE"
              CardDescription="Real-estate , this is the real estate project where you can choose your best fit home."
              frameWork="React + Tailwinds + Nodejs + Frame-motion "
              image={image6}
              link="https://hospital-seven-sigma.vercel.app/"
            />
            {/*  */}
            <BlogCard
              CardTitle="REACT-WEATHER APP"
              CardDescription="React weather app is app developed to get access to check out weather of the your location ."
              frameWork="React + Tailwinds + Material UI"
              image={image7}
              link="https://react-weather-delta-fawn.vercel.app/"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

const BlogCard = ({ image, CardTitle, link, CardDescription, frameWork }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-10 w-full">
          <div className="mb-8 overflow-hidden rounded">
            <Link to={link}>
              <img src={image} alt="" className="w-full" />
            </Link>
          </div>
          <div className="w-full text-center">
            <h3
              className="mb-4 text-center inline-block text-xl 
            font-semibold text-dark hover:text-primary dark:text-white 
            sm:text-2xl lg:text-xl xl:text-2xl"
            >
              {CardTitle}
            </h3>
            <p className="text-base text-center text-body-color dark:text-dark-6">
              {CardDescription}
            </p>
            <h2 className="text-center font-bold text-blue-400 dark:text-blue-500"> {frameWork}</h2>
          </div>
        </div>
      </div>
    </>
  );
};
