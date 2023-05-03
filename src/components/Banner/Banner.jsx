import React from "react";
import resume from "../../assets/resume.pdf";
import coding from "../../assets/coding.json";
import Typewriter from "typewriter-effect";
import Lottie from "lottie-react";
import { AiOutlineDownload } from "react-icons/ai";
import Resume from "../Resume/Resume";

const Banner = () => {
   return (
      <div className="text-gray2 md:-mt-10 mt-20 ">
         <div className="container  flex flex-col justify-center p-6  mx-auto sm:py-12 lg:flex-row lg:justify-between">
            <div className="flex -z-40 items-center md:ml-16 justify-center md:p-6 md:mt-8 mt-  ">
               <Lottie
                  className="object-contain rounded-lg  md:w-[500px] w-[320px]"
                  animationData={coding}
                  loop={true}
               />
            </div>
            <div className="flex  flex-col justify-center md:mt-0 mt-14  rounded-sm lg:max-w-lg xl:max-w-lg lg:text-left">
               <h1 className=" font-bold leading-none md:text-5xl text-3xl">
                  <span className="text-primary py-1"> Hello</span>! I am <br />
                  Ripas <span className="text-primary py-1">Sorker </span>
                  <span className=" py-1">Rifat</span>
               </h1>

               <p className="my-3 mb-6 md:text-2xl text-xl md:justify-start  flex ">
                  I'm a{"  "}
                  <span className="text-[#19e126] font-semibold">
                     <Typewriter
                        options={{
                           strings: [
                              "_ MERN Stack Developer",
                              `_ Frontend Developer`,
                              "_ Full Stack Developer",
                              "_ Backend Developer",
                           ],
                           autoStart: true,
                           loop: true,
                        }}
                     />{" "}
                  </span>
               </p>
               <div>
                  <Resume />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;
