import React from "react";
import iphone from "../assets/img/products/iphone.png"
function Iphone() {
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen bg-gray-50">
        <div>
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-5">iPhone</h1>
            <p className="text-xl mb-2">Meet the latest iPhone lineup.</p>
          </div>

          <div className="flex justify-center items-center">
            <button className="mr-5 border px-8 py-2  rounded-full bg-blue-600 text-white border-blue-600">Learn more</button>
            <button className=" border px-8 py-2  rounded-full  text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">Shop iPhone</button>
          </div>

          <div>
            <img src={iphone} alt="" className="w-200" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Iphone;
