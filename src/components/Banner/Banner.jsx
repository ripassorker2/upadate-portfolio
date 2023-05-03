import React from "react";
import coding from "../../assets/coding.json";
import Typewriter from "typewriter-effect";
import Lottie from "lottie-react";
import Resume from "../Resume/Resume";

const Banner = () => {
   return (
      <div className="text-gray2 md:-mt-10 mt-20 " id="home">
         <div className="container grid md:grid-cols-2 md:gap-x-10 sm:py-12 ">
            <div className="flex -z-40 items-center md:ml-16 justify-center md:p-6 md:mt-8">
               <Lottie
                  className="object-contain rounded-lg  md:w-[500px] w-full"
                  animationData={coding}
                  loop={true}
               />
            </div>
            <div className=" md:mt-0 mt-14 md:grid place-content-center">
               <div className="flex flex-col">
                  <h2 className="font-bold leading-none md:text-5xl text-3xl">
                     <span className="text-primary py-1"> Hello</span>! I am{" "}
                     <br />
                     Ripas <span className="text-primary py-1">Sorker </span>
                     <span className=" py-1">Rifat</span>
                  </h2>

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
      </div>
   );
};

export default Banner;
