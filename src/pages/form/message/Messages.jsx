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
      placeholder: "Email",
      errorMessage: "email should be valid and should incloude @ symbols",
      label: "Email",
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
      {/* <div className="w-full xl:w-full">
        <div className="items-center p-4 md:w-full sm:w-full flex text-gray-800 justify-center">
          <div className="w-full p-8 bg-white rounded shadow-2xl">
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
                  <p className="text-black p-4 max-w-[500px]">
                    The Contact Us component is a form that collects information
                    from your visitors and enables them to contact you.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}
      <div className="w-full px-4">
        <div className="text-center items-center justify-center text-gray-800">
          <div className="w-full max-w-xl p-6 bg-white rounded-lg shadow-2xl">
            <div className="Messages w-full">
              <form onSubmit={handleSubmit}>
                <div className="head">
                  <h2 className="text-blue-400 font-bold text-2xl text-center py-4">
                    MESSAGE ME
                  </h2>
                </div>
                <div className="w-full space-y-4">
                  {inputs.map((input) => (
                    <FormInput
                      key={input.id}
                      className="w-full p-3 border rounded-md"
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
};
export default Messsages;
