import React from "react";
import { Link, NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import resume from "../../assets/resume.pdf";
import Resume from "../Resume/Resume";

const Navbar = () => {
   return (
      <div
         className="z-[4000] py-7 w-full shadow-gray-500 bg-black text-gray1 sticky top-0 "
         id="home"
      >
         <div className="relative container  flex items-center justify-between ">
            <Link to="/" className="inline-flex items-center">
               <span className="ml-2 text-2xl font-serif font-bold tracking-wide text-gray1 uppercase">
                  <span className="text-[#0dccf2] py-1"> L</span> W
                  <span className="text-[#0dccf2] py-1"> C</span>
               </span>
            </Link>
            <ul className="lg:flex items-center hidden space-x-8">
               <li>
                  <NavLink
                     to="/home"
                     style={({ isActive }) => ({
                        color: isActive && "#0dccf2",
                     })}
                     className="font-medium tracking-wide text-gray-00 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-[#0dccf2] "
                  >
                     Home
                  </NavLink>
               </li>
               <li>
                  <a
                     href="/#skills"
                     className="font-medium tracking-wide text-gray1 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-[#0dccf2] "
                  >
                     Skills
                  </a>
               </li>
               <li>
                  <NavLink
                     to="/projects"
                     style={({ isActive }) => ({
                        color: isActive && "#0dccf2",
                     })}
                     className="font-medium tracking-wide text-gray1 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-[#0dccf2] "
                  >
                     Projects
                  </NavLink>
               </li>

               <li>
                  <NavLink
                     to="/contact"
                     style={({ isActive }) => ({
                        color: isActive && "#0dccf2",
                     })}
                     className="font-medium tracking-wide text-gray1 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-[#0dccf2] "
                  >
                     Contact
                  </NavLink>
               </li>
               <li>
                  <a
                     href="/#about"
                     className="font-medium tracking-wide text-gray1 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-[#0dccf2] "
                  >
                     About
                  </a>
               </li>
               <li>
                  <Resume />
               </li>
            </ul>
         </div>
         <Sidebar resume={resume} />
      </div>
   );
};

export default Navbar;
