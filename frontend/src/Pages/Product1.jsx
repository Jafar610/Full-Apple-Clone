import React from "react";
import ipad from "../assets/img/products/ipad air.png";
import macPro from "../assets/img/products/macPro.png";
function Product1() {
  return (
    <>
      <div className="w-full h-screen bg-white-900 flex justify-center items-center mt-10  pb-5">
        <div className="flex justify-center items-center">
          <div className="bg-[#eff5f5] mr-5 ml-5  h-screen w-full">
            <div className="bg-[#addcef] pt-10">
              <h1 className="text-center font-bold text-4xl pt-3 pb-3">
                iPad{" "}
                <span className="text-[#166dbd] font-mono italic font-bold">
                  air
                </span>
              </h1>

              <p className="text-center text-2xl text-black-700">
                Now Supercharged By M4.
              </p>
              <div className="flex justify-center items-center mt-3">
                <button className="mr-5  border px-8 py-2  rounded-full bg-blue-600 text-white border-blue-600">
                  Learn More
                </button>
                <button className=" border px-8 py-2  rounded-full  text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
                  Buy
                </button>
              </div>
            </div>

            <img src={ipad} alt="" />
          </div>




          <div className="bg-black h-screen w-full mr-5">
            <h1 className="text-center font-bold text-5xl pt-15 pb-3 text-white font-popins">
              MacBook Pro
            </h1>

            <p className="text-center text-2xl text-black-700 text-white pt3 pb-3">
              Now With M5, M5 Pro and M5 Max.
            </p>
            <div className="flex justify-center items-center mt-3">
              <button className="mr-5  border px-8 py-2  rounded-full bg-blue-600 text-white border-blue-600">
                Learn More
              </button>
              <button className=" border px-8 py-2  rounded-full  text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
                Buy
              </button>
            </div>
            <img src={macPro} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Product1;
