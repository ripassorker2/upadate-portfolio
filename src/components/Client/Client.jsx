import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Client = () => {
   const [counterOn, seTCounterOn] = useState(false);
   return (
      <div className="bg-black  md:mt-20 mt-14 py-16">
         <div className="container text-gray1">
            <ScrollTrigger
               onEnter={() => seTCounterOn(true)}
               onExit={() => seTCounterOn(false)}
            >
               {counterOn && (
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
                     <div className="bg-[#2a2c39]  grid place-content-center p-6 rounded-md text-center">
                        <h4 className="text-gray1 md:text-3xl text-2xl  ">
                           Experience
                        </h4>
                        <h3 className="text-gray1 md:text-5xl text-4xl">
                           <CountUp start={0} delay={0} end={2} duration={1} />
                           +years
                        </h3>
                     </div>
                     <div className="bg-[#2a2c39]  grid place-content-center p-6 rounded-md text-center">
                        <h4 className="text-gray1 md:text-3xl text-2xl  ">
                           Happy Clients
                        </h4>
                        <h3 className="text-gray1 md:text-5xl text-4xl">
                           <CountUp start={0} delay={0} end={20} duration={2} />
                           +
                        </h3>
                     </div>
                     <div className="bg-[#2a2c39]  grid place-content-center p-6 rounded-md text-center">
                        <h4 className="text-gray1 md:text-3xl text-2xl  ">
                           Projects
                        </h4>
                        <h3 className="text-gray1 md:text-5xl text-4xl">
                           <CountUp start={0} delay={0} end={50} duration={3} />
                           +
                        </h3>
                     </div>
                  </div>
               )}
            </ScrollTrigger>
         </div>
      </div>
   );
};

export default Client;
