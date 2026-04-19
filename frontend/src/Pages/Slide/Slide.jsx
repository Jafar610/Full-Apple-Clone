import React from "react";
import iphone from "../../assets/img/products/iphone 15Pro.png";
function Slide() {
  return (
    <>
      <div className="flex justify-center items-center w-full bg-white">
        <div className="flex justify-around items-center bg-gray-200  w-full">
          <div className="text-center">
            <h1 className="text-6xl font-bold font-poppins pt-3 pb-3 ">
              iPhone 15 Pro
            </h1>
            <p className="text-3xl font-poppins font-meduim mt-2 mb-2">
              Titanum, So strong. <br />
              So light, So Pro.
            </p>

            <p className="text-3xl font-poppins ">
              <span className="line-through text-2xl text-gray-800 mr-5">
                $1,199
              </span>{" "}
              $1,099
            </p>

            <div className="flex justify-center items-center mt-5">
              <button className="border rounded-xl px-10 py-2 mr-3 bg-blue-700 text-white text-md">
                Buy
              </button>
              <button className="border rounded-xl px-8 py-2 text-md hover:bg-blue-700 hover:text-white">
                Learn More
              </button>
            </div>
          </div>
          <div>
            <img src={iphone} alt="" className="w-100 h-100" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Slide;
