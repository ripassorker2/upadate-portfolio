import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import SideNav from "../components/Dashboard/SideNav/SideNav";

const Dashboard = () => {
   return (
      <div>
         <Navbar />
         <SideNav />
      </div>
   );
};

export default Dashboard;
