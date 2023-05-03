import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
// import moduleName from 'module';

const Sidebar = ({ resume }) => {
   const [open, setOpen] = useState(false);
   return (
      <div className="md:hidden block">
         <>
            {!open && (
               <div
                  className="text-3xl fixed right-4 top-5 z-[6000]"
                  onClick={() => setOpen(!open)}
               >
                  <HiBars3 />
               </div>
            )}

            <div
               className={`top-0 right-0 w-[300px] ease-in-out duration-300
               bg-[#262624]  text-white fixed h-[100vh] z-[100] ${
                  open ? "translate-x-0 " : "translate-x-full"
               }`}
            >
               <button
                  className="flex text-3xl font-serif font-semibold h-10 w-10 rounded-full text-gray-100 items-center cursor-pointer fixed right-[240px] top-4 z-[120]"
                  onClick={() => setOpen(!open)}
               >
                  <RxCross2 />
               </button>

               <div className="flex relative list-none -mt-24  flex-col justify-center items-center w-full h-full">
                  <div className=" w-full text-center mb-2">
                     <NavLink
                        className={({ isActive }) =>
                           isActive
                              ? "  text-[#0dccf2] text-[20px] hover:text-[#0dccf2]"
                              : "text-white  text-[20px] hover:text-[#0dccf2] duration-500 "
                        }
                        to="/"
                     >
                        Home
                     </NavLink>
                  </div>
                  <div className=" w-full text-center mb-2">
                     <NavLink
                        className={({ isActive }) =>
                           isActive
                              ? "  text-[#0dccf2] text-[20px] hover:text-[#0dccf2]"
                              : "text-white  text-[20px] hover:text-[#0dccf2] duration-500 "
                        }
                        to="/skills"
                     >
                        Skills
                     </NavLink>
                  </div>
                  <div className=" w-full text-center mb-2">
                     <NavLink
                        className={({ isActive }) =>
                           isActive
                              ? "  text-[#0dccf2] text-[20px] hover:text-[#0dccf2]"
                              : "text-white  text-[20px] hover:text-[#0dccf2] duration-500 "
                        }
                        to="/projects"
                     >
                        Projects
                     </NavLink>
                  </div>

                  <div className=" w-full text-center mb-2">
                     <NavLink
                        className={({ isActive }) =>
                           isActive
                              ? "  text-[#0dccf2] text-[20px] hover:text-[#0dccf2]"
                              : "text-white  text-[20px] hover:text-[#0dccf2] duration-500 "
                        }
                        to="/about"
                     >
                        About Me
                     </NavLink>
                  </div>
                  <div className=" w-full text-center mb-2">
                     <NavLink
                        className={({ isActive }) =>
                           isActive
                              ? "  text-[#0dccf2] text-[20px] hover:text-[#0dccf2]"
                              : "text-white  text-[20px] hover:text-[#0dccf2] duration-500 "
                        }
                        to="/contact"
                     >
                        Contact Me
                     </NavLink>
                  </div>
                  <div className="  text-center mb-2 mt-3 ">
                     <li>
                        <a
                           href={resume}
                           download
                           className="block  text-lg rounded bg-[#0dccf2] px-4 py-2  font-semibold text-white shadow hover:bg-[#19e126] duration-500 hover:text-gray-800 focus:outline-none "
                        >
                           Get Resume
                        </a>
                     </li>
                  </div>
               </div>
            </div>
         </>
      </div>
   );
};

export default Sidebar;
