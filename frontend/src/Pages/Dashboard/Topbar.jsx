import React from "react";
import profile from "../../assets/img/appleLogo.png";

function Topbar() {
  return (
    <>
      <div className="bg-blue-500 shadow-xl mt-5">
        <div className="flex justify-between items center">
          <div className="flex justify-start items-center bg-[#151718] pr-10 pl-3">
            <img src={profile} alt="" className="w-10 rounded-full mr-5"/>
            <h1 className="text-white font-bold text-md">Apple Store</h1>
          </div>
          <div className="flex justify-end items-center p-2 ">
            <div className="border border-gray-100 rounded-full mr-5">
              <img src={profile} alt="" className="w-10 rounded-full" />
            </div>
            <div className="mr-10">
              <h1 className="font-bold text-md text-white">Jafar Mohamed</h1>
              <h2 className="text-sm text-white">Admin</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topbar;
