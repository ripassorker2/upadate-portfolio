import React from "react";
import resume from "../../assets/resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

const Resume = () => {
   return (
      <div>
         <a
            href={resume}
            download
            className="inline-flex text-gray1 font-semibold text-center justify-center items-center w-full px-4 py-2 rounded shadow  hover:shadow-primary shadow-primary  sm:w-auto "
         >
            Resume
            <span className="ml-2 font-bold text-lg">
               <AiOutlineDownload />
            </span>
            {/* <div className="mb-8 grid md:grid-cols-4">
            <NavLink
               to={"/client"}
               className="inline-flex text-gray1 font-semibold text-center justify-center items-center w-full px-4 py-2  shadow  hover:shadow-primary shadow-primary "
            >
               Frontend
            </NavLink>
            <NavLink
               to={"/"}
               className="inline-flex text-gray1 font-semibold text-center justify-center items-center w-full px-4 py-2  shadow  hover:shadow-primary shadow-primary "
            >
               Frontend
            </NavLink>
            <NavLink
               to={"/"}
               className="inline-flex text-gray1 font-semibold text-center justify-center items-center w-full px-4 py-2  shadow  hover:shadow-primary shadow-primary "
            >
               Frontend
            </NavLink>
            <NavLink
               to={"/"}
               className="inline-flex bg-primary text-black font-semibold text-center justify-center items-center w-full px-4 py-2  shadow  hover:shadow-primary shadow-primary "
            >
               Frontend
            </NavLink>
         </div> */}
         </a>
      </div>
   );
};

export default Resume;
