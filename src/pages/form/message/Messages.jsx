import React, { useState } from "react";
import FormInput from "../action/FormInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";
React;
const Messsages = () => {
  const [values, setValues] = useState({
    email: "",
    message: "",
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
      name: "message",
      type: "text",
      placeholder: "Message me",
      errorMessage: "message needed here",
      label: "Message us",
      required: true,
    },
  ];
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    try {
      await axios.post("https://shopsnodejs.onrender.com/message-me", values);

      Navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="w-full xl:w-full lg:w-full p-4 md:w-full sm:w-full flex text-gray-700 justify-center">
        <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
          <div className="Messsages w-full">
            <form onSubmit={handleSubmit}>
              <div className="head">
                <h2 className="text-blue-400 font-bold py-4"> MESSAGE ME</h2>
              </div>
              <div className="w-full">
                {inputs.map((input) => (
                  <FormInput
                    key={input.id}
                    className="p-3"
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                  />
                ))}
                <div className="head">
                  <button className="btn w-44 text-white">Send</button>
                </div>
                <p className="text-black p-4">Send me message</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Messsages;
