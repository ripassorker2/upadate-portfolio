import React from "react";
import resume from "../../assets/resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

const Resume = () => {
   return (
      <div>
         <a
            href={resume}
            download
            className="inline-flex text-gray1 text-center justify-center items-center w-full px-4 py-2 rounded shadow hover:shadow-md hover:shadow-primary shadow-primary  sm:w-auto duration-500 "
         >
            Resume
            <span className="ml-2 font-bold text-lg">
               <AiOutlineDownload />
            </span>
         </a>
      </div>
   );
};

export default Resume;
