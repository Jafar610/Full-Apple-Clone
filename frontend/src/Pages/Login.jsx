import React from "react";
import logo from "../assets/img/apple-logo.svg";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
  });
   const changeHandler = (e) => {
    
   }
  return (
    <>
      <div className="bg-gray-100 w-full h-screen flex justify-center items-center font-poppins">
        <div>
          <div className="w-100">
            <div className="flex justify-center items-center">
              <img src={logo} alt="" className="w-15" />
            </div>
            <div className="text-center">
              <h1 className="font-bold text-3xl mt-2 text-gray-700">
                Sign in with your Apple ID
              </h1>
              <p className="mt-5 text-md text-center text-gray-500">
                Sign in to access your Apple account and manage your orders,
                devices and more.
              </p>
            </div>
          </div>

          <div className="mt-5 flex  border border-gray-300 rounded-2xl shadow-2xl w-100 px-8 py-5 bg-white">
            <form>
              <div className="mt-5">
                <label htmlFor="" className="text-start text-xl ">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={changeHandler}
                  className="block mt-2 mb-2 border p-3 w-80 rounded-xl outline-none shadow-lg border-gray-400 text-lg font-medium text-gray-500"
                />
              </div>
              <div>
                <label htmlFor="" className="text-start text-xl ">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  onChange={changeHandler}
                  className="block mt-2 mb-2 border p-3 w-80 rounded-xl outline-none shadow-lg border-gray-400 text-lg font-medium text-gray-500"
                />
              </div>
              <div className="mt-8 flex justify-center items-center border p-2 rounded-2xl shadow-lg border-gray-400  hover:bg-gray-300 cursor-pointer">
                <img src={logo} alt="appleLogo" className="w-6 mr-4" />
                <button type="submit" className="text-xl ">
                  Sign in with Apple
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
