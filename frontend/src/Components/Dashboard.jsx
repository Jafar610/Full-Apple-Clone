import React from "react";
import Topbar from "../Pages/Dashboard/Topbar";
import Sidebar from "../Pages/Dashboard/Sidebar";
import Categories from "../Pages/Dashboard/Categories";
import { Outlet } from "react-router-dom";
import Product from "../Pages/Dashboard/Product";

function Dashboard() {
  return (
    <>
      <Topbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
