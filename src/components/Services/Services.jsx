import React from "react";
import "./services.css";
import { AiFillEdit, AiFillThunderbolt } from "react-icons/ai";
import { TiWorld } from "react-icons/ti";

const Services = () => {
   return (
      <section className="pt-20  " id="service">
         <div className="container">
            <div className="pb-10">
               <h4 className="title">My Services</h4>
               <h3 className="font-semibold  md:text-xl text-lg mb-2 text-center text-gray-400">
                  {"<-~-"} Which services I provied. {"-~->"}
               </h3>
            </div>

            <div className="contain">
               <div className="box">
                  <div className="content">
                     <AiFillEdit className="icon" />
                     <div className="text">
                        <h4 className="text-2xl mt-3 font-semibold">
                           Frontend
                        </h4>
                        <p className="text-base">
                           I will design or redesign your website from Scratch.
                        </p>
                        <a href="https://wa.me/+8801744876681" target="_blank">
                           <button className="inline-flex text-gray1 text-center justify-center items-center  px-6 text-lg py-2 rounded shadow  hover:shadow-primary shadow-primary   ">
                              Hire Me
                           </button>
                        </a>
                     </div>
                  </div>
               </div>
               <div className="box">
                  <div className="content">
                     <TiWorld className="icon" />
                     <div className="text">
                        <h4 className="text-2xl mt-3 font-semibold">
                           Full Stack
                        </h4>
                        <p className="text-base">
                           I will provide you a complete website with frontend
                           and backend.
                        </p>
                        <a href="https://wa.me/+8801744876681" target="_blank">
                           <button className="inline-flex text-gray1 text-center justify-center items-center  px-6 text-lg py-2 rounded shadow  hover:shadow-primary shadow-primary   ">
                              Hire Me
                           </button>
                        </a>
                     </div>
                  </div>
               </div>
               <div className="box">
                  <div className="content">
                     <AiFillThunderbolt className="icon" />
                     <div className="text">
                        <h4 className="text-2xl mt-3 font-semibold">Backend</h4>
                        <p className="text-base">
                           I will develop your backend from Scratch using MERN.
                        </p>
                        <a href="https://wa.me/+8801744876681" target="_blank">
                           <button className="inline-flex text-gray1 text-center justify-center items-center  px-6 text-lg py-2 rounded shadow  hover:shadow-primary shadow-primary   ">
                              Hire Me
                           </button>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Services;
