import React, { useState } from "react";
import FormInput from "../action/FormInput";
import { Link, useNavigate } from "react-router-dom";
import image from "../../../assets/images/Screenshot2.png";
import image1 from "../../../assets/images/Screenshot1.png";
import image2 from "../../../assets/images/Screenshot.png";
import axios from "axios";
React;
const Message = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "email",
      errorMessage: "email should be valid and should incloude @ symbols",
      label: "email",
      required: true,
    },

    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "password",
      errorMessage:
        "password should be 8-12 characters include at least 1 letter and 1 symbol",
      label: "password",
      required: true,
    },
  ];
  const Navigate = useNavigate();
  // fetching data from database
  // handleSubmit

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);

    if (values.email === "admin@gmail.com" && values.password === "admin") {
      if (window.confirm("Do you really want to continue to dashboard?")) {
        Navigate("/Dashboard");
      } else {
        Navigate("/");
      }
      return;
    }

    try {
      await axios.post("https://shopsnodejs.onrender.com/users/auth", values);
      if (window.confirm("Do you really want to move?")) {
        Navigate("/Udashboard");
      } else {
        Navigate("/");
      }
    } catch (err) {
      console.log(err);

      if (err.response && err.response.status === 401) {
        alert("Invalid credentials. Please try again.");
      } else {
        alert("An error occurred. Please try again later.");
      }
    }
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="title"></div>
      <section className="relative bg-black w-full sm:w-full md:w-full lg:w-full xl:w-full">
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
                <div className="absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                <Link to={"/Market"}>
                  <button className="inline-flex relative items-center justify-center w-full sm:w-auto px-8 py-3 sm:text-sm text-base sm:py-3.5 font-semibold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                    Read Exclusive Post
                  </button>
                </Link>
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
      <div className="w-full bg-gray-500 justify-center items-center justify-items-center">
        {/* 1 side */}
        <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
          <form onSubmit={handleSubmit} className="mt-4">
            <h2 className="title text-blue-400 font-bold py-4">LOG IN</h2>
            <div className="w-full">
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  className="p-3 w-full"
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
              <div className="head">
                <button className="button w-42 text-white">Submit</button>
                <p className="p-4 text-black">
                  If you don`t have an account
                  <Link to="/Register">
                    <b>
                      <button className="p-3 bg-blue-500 hover:text-green-300 ">
                        Register
                      </button>
                    </b>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
        {/* 2 side */}
      </div>
      <br />
    </>
  );
};
export default Message;
