import React from "react";
import image from "../../assets/images/Screenshot.png";
import image1 from "../../assets/images/Screenshot1.png";
import image2 from "../../assets/images/Screenshot2.png";
import image3 from "../../assets/images/hospital-seven.png";
import { Link } from "react-router-dom";
React;
const Blog = () => {
  return (
    <>
      <section className="w-full bg-black p-4 text-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="w-full">
          <div className="-mx-4 flex flex-wrap">
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

          <div className="-mx-4 flex flex-wrap">
            <BlogCard
              CardTitle="COMPUTERS STORE"
              CardDescription="LD Computer Store Rwanda Limited is a Full-Service Technology Services Provider also called the Top IT Consulting Company in Kigali, Rwanda."
              image={image}
              link="https://shops-lovat.vercel.app/"
              name="Shop-lovat"
            />
            <BlogCard
              CardTitle="CARS STORE"
              CardDescription="Leon is happy to serve you Your favourate Cars , Choose The Best Cars You want and Your repairment Kits."
              image={image1}
              name="Leon-cars"
              link="https://leon-car.vercel.app/"
            />
            <BlogCard
              CardTitle="LEON-STATUS"
              CardDescription="Software development is the process of designing and implementing a software solution to satisfy a user."
              image={image2}
              name="Leon-status"
              link="https://leon-status.vercel.app/"
            />
            <BlogCard
              CardTitle="MEDIPLUS"
              CardDescription="Software development is the process of designing and implementing a software solution to satisfy a user."
              image={image3}
              name="Mediplus"
              link="https://hospital-seven-sigma.vercel.app/"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

const BlogCard = ({ image, CardTitle, link, name, CardDescription }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-10 w-full">
          <div className="mb-8 overflow-hidden rounded">
            <img src={image} alt="" className="w-full" />
          </div>
          <div>
            <Link to={link}>
              <button className="text-center bg-amber-100 block">{name}</button>
            </Link>
            <h3 className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              {CardTitle}
            </h3>
            <p className="text-base text-body-color dark:text-dark-6">
              {CardDescription}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
