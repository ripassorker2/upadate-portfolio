import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import Resume from "../Resume/Resume";
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
               bg-[#252734]  text-white fixed h-[100vh] z-[100] ${
                  open ? "translate-x-0 " : "translate-x-full"
               }`}
            >
               <button
                  className="flex text-3xl font-serif font-semibold h-10 w-10 rounded-full text-gray-100 items-center cursor-pointer fixed right-[240px] top-5 z-[120]"
                  onClick={() => setOpen(!open)}
               >
                  <RxCross2 />
               </button>

               <div className="flex relative list-none -mt-24  flex-col justify-center items-center w-full h-full">
                  <div className=" w-full text-center mb-2">
                     <li>
                        <Link
                           to="/"
                           className="font-medium text-xl  tracking-wide text-gray1 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-[#0dccf2] "
                        >
                           Home
                        </Link>
                     </li>
                  </div>
                  <div className=" w-full text-center mb-2">
                     <li>
                        <a
                           href="/#skills"
                           className="font-medium text-xl tracking-wide text-gray1 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-[#0dccf2] "
                        >
                           Skills
                        </a>
                     </li>
                  </div>
                  <div className=" w-full text-center mb-2">
                     <li>
                        <Link
                           to="/projects"
                           className="font-medium text-xl tracking-wide text-gray1 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-[#0dccf2] "
                        >
                           Projects
                        </Link>
                     </li>
                  </div>

                  <div className=" w-full text-center mb-2">
                     <li>
                        <a
                           href="/#about"
                           className="font-medium text-xl tracking-wide text-gray1 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-[#0dccf2] "
                        >
                           About
                        </a>
                     </li>
                  </div>
                  <div className=" w-full text-center mb-2">
                     <li>
                        <a
                           href="/#contact"
                           className="font-medium text-xl tracking-wide text-gray1 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-[#0dccf2] "
                        >
                           Contact
                        </a>
                     </li>
                  </div>
                  <div className="  text-center mb-2 mt-3 ">
                     <li className="text-xl">
                        <Resume />
                     </li>
                  </div>
               </div>
            </div>
         </>
      </div>
   );
};

export default Sidebar;
