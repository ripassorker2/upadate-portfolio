import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import {
   AiOutlineUser,
   AiOutlineAppstoreAdd,
   AiOutlineVerticalLeft,
} from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";

const SideNav = () => {
   const menus = [
      {
         name: "Dashboard",
         link: "/dashboard/welcome",
         icon: MdOutlineDashboard,
      },
      {
         name: "Add Project",
         link: "/dashboard/add-project",
         icon: AiOutlineVerticalLeft,
      },
      {
         name: "All Project",
         link: "/dashboard/all-project",
         icon: AiOutlineAppstoreAdd,
      },
   ];
   const [open, setOpen] = useState(true);
   return (
      <section className="flex">
         <div
            className={`bg-black h-[86vh]  overflow-y-auto ${
               open ? "w-[260px]" : "w-16"
            } duration-500 text-gray1 px-4`}
         >
            <div className="py-3 flex justify-end">
               <HiMenuAlt3
                  size={26}
                  className="cursor-pointer"
                  onClick={() => setOpen(!open)}
               />
            </div>
            <div className="mt-4 flex flex-col gap-4 relative">
               {menus?.map((menu, i) => (
                  <Link
                     to={menu?.link}
                     key={i}
                     className={` ${
                        menu?.margin && "mt-5"
                     } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-[#2a2c39] rounded-md`}
                  >
                     <div>
                        {React.createElement(menu?.icon, { size: "20" })}
                     </div>
                     <h2
                        style={{
                           transitionDelay: `${i + 3}00ms`,
                        }}
                        className={`whitespace-pre duration-500 ${
                           !open && "opacity-0 translate-x-28 overflow-hidden"
                        }`}
                     >
                        {menu?.name}
                     </h2>
                     <h2
                        className={`${
                           open && "hidden"
                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                     >
                        {menu?.name}
                     </h2>
                  </Link>
               ))}
            </div>
         </div>
         <div className="overflow-y-auto h-[86vh]" style={{ flex: 10 }}>
            <Outlet />
         </div>
      </section>
   );
};

export default SideNav;
