import React from "react";
import card from "../assets/img/products/apple_card.jpg";
import iphoneTrading from "../assets/img/products/iphone_trading.jpg";
import logo from '../assets/img/apple-logo.svg'
function Cards() {
  return (
    <>
      <div className="w-full h-screen bg-white-900 flex justify-center items-center mt-3  pb-5">
        <div className="flex justify-center items-center">
          <div className="bg-[#f5f5f7] mr-5 ml-5  h-screen w-full">
            <div className="pt-3">
              <div className="flex justify-center items-center">
                <img src={logo} alt="" className="w-15 mt-10" />
                <h1 className="text-center font-bold text-5xl pt-15 pb-3 text-black-800 font-popins">
                  Trade In
                </h1>
              </div>

              <p className="text-center text-2xl text-black-700">
                Get Up to $195 - $685 <br /> in credit when you trade in <br /> iphone 13 or higher.
              </p>
              <div className="flex justify-center items-center mt-3">
                <button className="mr-5  border px-8 py-2  rounded-full bg-blue-600 text-white border-blue-600">
                  Get your estimate
                </button>
                
              </div>
            </div>

            <img src={iphoneTrading} alt="" />
          </div>

          <div className="bg-[#f5f5f7] h-screen w-full mr-5">
            <div className="flex justify-center items-center">
              <img src={logo} alt="" className="w-15 mt-10" />
              <h1 className="text-center font-bold text-5xl pt-15 pb-3 text-black-800 font-popins">
                Business
              </h1>
            </div>

            <p className="text-center text-2xl text-black-700 pt3 pb-3">
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
            <img src={card} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
