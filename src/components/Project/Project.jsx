import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import ProjectTab from "../ProjectTab/ProjectTab";

const Project = () => {
   const path = useLocation();
   const pathname = path.pathname;

   return (
      <section
         className={`${
            pathname !== "/projects"
               ? "bg-black  md:mt-36 mt-24 mt py-16"
               : " mt-20"
         } `}
      >
         <div className="container ">
            <div className="pb-4">
               <h4 className="title">My Projects</h4>
               <h3 className="font-semibold  md:text-xl text-lg mb-2 text-center text-gray-400">
                  {"<-~-"} Some of the projects I have done {"-~->"}
               </h3>
            </div>
            <div>
               <ProjectTab />
            </div>

            {pathname !== "/projects" && (
               <div className="flex justify-end">
                  <Link to={"/projects"} className="inline-flex see-all">
                     See All <AiOutlineArrowRight size={20} className="ml-2" />
                  </Link>
               </div>
            )}
         </div>
      </section>
   );
};

export default Project;
