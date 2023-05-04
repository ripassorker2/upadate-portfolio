import React from "react";
import img from "../../assets/rifat.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const Project = () => {
   const path = useLocation();
   const pathname = path.pathname;
   console.log(pathname);

   return (
      <section
         className={`${
            pathname !== "/projects"
               ? "bg-black  md:mt-36 mt-24 mt py-16"
               : " mt-20"
         } `}
      >
         <div className="container ">
            <div className="pb-6">
               <h4 className="title">My Projects</h4>
               <h3 className="font-semibold  md:text-xl text-lg mb-2 text-center text-gray-400">
                  {"<-~-"} Some of the projects I have done {"-~->"}
               </h3>
            </div>

            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
               <div className="card  relative">
                  <figure className="h-[230px] w-full overflow-hidden">
                     <img
                        src={img}
                        className=" rounded-lg duration-500 h-full w-full overflow-hidden "
                        alt=""
                     />
                  </figure>
                  <a
                     className="absolute top-7 right-7 z-50"
                     href={""}
                     target={"_blank"}
                  >
                     <BiWorld
                        size={25}
                        className="bg-slate-300 rounded-full "
                     />
                  </a>
                  <div className="mt-3">
                     <h4 className="text-gray2 text-2xl">Web Development</h4>
                     <p className="text-gray1 text-lg">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Voluptate nemo incidunt assumenda ipsum molestias.
                     </p>
                     <button className="inline-flex mt-2 text-gray1 text-center justify-center items-center w-full px-4 py-2 rounded shadow hover:shadow-primary shadow-primary ">
                        Details{" "}
                        <AiOutlineArrowRight size={20} className="ml-2" />
                     </button>
                  </div>
               </div>
               <div className="card  relative">
                  <figure className="h-[230px] w-full overflow-hidden">
                     <img
                        src={img}
                        className=" rounded-lg duration-500 h-full w-full overflow-hidden "
                        alt=""
                     />
                  </figure>
                  <a
                     className="absolute top-7 right-7 z-50"
                     href={""}
                     target={"_blank"}
                  >
                     <BiWorld
                        size={25}
                        className="bg-slate-300 rounded-full "
                     />
                  </a>
                  <div className="mt-3">
                     <h4 className="text-gray2 text-2xl">Web Development</h4>
                     <p className="text-gray1 text-lg">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Voluptate nemo incidunt assumenda ipsum molestias.
                     </p>
                     <button className="inline-flex mt-2 text-gray1 text-center justify-center items-center w-full px-4 py-2 rounded shadow hover:shadow-primary shadow-primary ">
                        Details{" "}
                        <AiOutlineArrowRight size={20} className="ml-2" />
                     </button>
                  </div>
               </div>
               <div className="card  relative">
                  <figure className="h-[230px] w-full overflow-hidden">
                     <img
                        src={img}
                        className=" rounded-lg duration-500 h-full w-full overflow-hidden "
                        alt=""
                     />
                  </figure>
                  <a
                     className="absolute top-7 right-7 z-50"
                     href={""}
                     target={"_blank"}
                  >
                     <BiWorld
                        size={25}
                        className="bg-slate-300 rounded-full "
                     />
                  </a>
                  <div className="mt-3">
                     <h4 className="text-gray2 text-2xl">Web Development</h4>
                     <p className="text-gray1 text-lg">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Voluptate nemo incidunt assumenda ipsum molestias.
                     </p>
                     <button className="inline-flex mt-2 text-gray1 text-center justify-center items-center w-full px-4 py-2 rounded shadow hover:shadow-primary shadow-primary ">
                        Details{" "}
                        <AiOutlineArrowRight size={20} className="ml-2" />
                     </button>
                  </div>
               </div>
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
