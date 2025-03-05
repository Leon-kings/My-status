import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../action/FormInput";
React;
export default function Post() {
  // variable to get values
  const [values, setValues] = useState({
    email: "",
    message: "",
    name: "",
  });
  //  variable used in form
  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Email should be valid and should incloude @ symbols",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "name",
      type: "name",
      placeholder: "Names",
      errorMessage: "Name should be eliteral",
      label: "Names",
      required: true,
    },
    {
      id: 3,
      name: "message",
      type: "text",
      placeholder: "Message me",
      errorMessage: "Message needed here",
      label: "Message us",
      required: true,
    },
  ];
  // Navigate declaration
  const Navigate = useNavigate();
  // HandleSubmit function to submit to database
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    try {
      await axios.post(
        "https://leon-portfolio-xm7a.onrender.com/0998C28",
        values
      );
      Navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  // HandleChanges function to get all changes
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  // return values
  return (
    <>
      <div className="w-full text-center items-center justify-center p-4 dark:text-white rounded-2xl">
        <div className="w-full text-center items-center justify-center text-gray-800">
          <div className="w-full p-6 bg-white rounded-lg shadow-2xl">
            <div className="Messages w-full">
              <form onSubmit={handleSubmit}>
                <div className="head">
                  <h2 className="text-blue-400 font-bold text-2xl text-center py-4">
                    MESSAGE ME
                  </h2>
                </div>
                <div className="w-full justify-center space-y-4">
                  {inputs.map((input) => (
                    <FormInput
                      key={input.id}
                      className="w-full font-bold p-3 border rounded-md"
                      {...input}
                      value={values[input.name]}
                      onChange={onChange}
                    />
                  ))}
                  <div className="text-center">
                    <button className="btn w-full md:w-44 bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 transition duration-300">
                      Send
                    </button>
                  </div>
                  <p className="text-black text-sm md:text-base p-4 max-w-[500px] mx-auto">
                    The Contact Us component is a form that collects information
                    from your visitors and enables them to contact you.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
