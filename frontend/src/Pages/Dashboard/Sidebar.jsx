import React from "react";
import {
  Grid2x2,
  Grip,
  House,
  LogOut,
  ShoppingCart,
  User2Icon,
  UserCircleIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <>
      <div className="bg-[#181818] w-64 h-screen shadow-sm font-poppins">
        <div className="pl-5 pt-3">
          <Link to="/dashboard">
            <div className="flex justify-start items-center p-3 hover:bg-[#212121] hover:rounded-md">
              <House size={25} className=" mr-3 text-white" />
              <h1 className="text-white text-xl font-md ">Dashboard</h1>
            </div>{" "}
          </Link>

          <h1 className="mt-3 text-lg font-xl text-gray-500">Products</h1>
          <Link>
            <div className="flex justify-start items-center p-3  hover:rounded-md hover:bg-[#212121] mb-2">
              <Grid2x2 size={25} className=" mr-3 text-white" />
              <h1 className="text-white text-xl font-md ">Categories</h1>
            </div>
          </Link>

          <Link>
            <div className="flex justify-start items-center p-3  hover:rounded-md hover:bg-[#212121]">
              <Grip size={25} className=" mr-3 text-white" />
              <h1 className="text-white text-xl font-md ">Products</h1>
            </div>
          </Link>

          <h1 className="mt-3 text-lg font-xl text-gray-500">Orders</h1>

          <Link>
            <div className="flex justify-start items-center p-3 hover:rounded-md hover:bg-[#212121] mb-2">
              <ShoppingCart size={25} className=" mr-3 text-white" />
              <h1 className="text-white text-xl font-md ">Orders</h1>
            </div>
          </Link>

          <Link>
            <div className="flex justify-start items-center p-3 hover:rounded-md hover:bg-[#212121]" >
              <User2Icon size={25} className=" mr-3 text-white" />
              <h1 className="text-white text-xl font-md ">Customers</h1>
            </div>
          </Link>

          <h1 className="mt-3 text-lg font-xl text-gray-500">Settings</h1>

          <Link>
            <div className="flex justify-start items-center p-3 hover:rounded-md hover:bg-[#212121]">
              <UserCircleIcon size={25} className=" mr-3 text-white" />
              <h1 className="text-white text-xl font-md ">Profile</h1>
            </div>
          </Link>

          <Link>
            <div className="flex justify-start items-center p-3 hover:rounded-md hover:bg-[#212121]">
              <LogOut size={25} className=" mr-3 text-white" />
              <h1 className="text-white text-xl font-md ">Log Out</h1>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
