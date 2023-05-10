import React from "react";
import { GiCancel } from "react-icons/gi";
import { BsArrowRightCircle } from "react-icons/bs";

const DetailsModal = ({ showModal, setShowModal, project }) => {
   console.log(project);

   return (
      <div>
         <>
            {showModal ? (
               <>
                  <div className="justify-center items-center flex  h-[600px] ">
                     <div className="fixed inset-[20px] bottom-0 top-16   z-[50] overflow-x-hidden overflow-y-auto">
                        <div className="relative w-auto mt-5 mx-auto max-w-5xl ">
                           {/*content*/}
                           <div className="!rounded-none card relative flex flex-col  h- w-full bg-[#2a2c39]">
                              {/*header*/}
                              <div className="md:px-5 py-1.5">
                                 <button
                                    className=" text-2xl text-gray2 absolute top-4 right-4"
                                    onClick={() => setShowModal(false)}
                                 >
                                    <GiCancel />
                                 </button>
                                 <div
                                    className=" absolute bottom-2 right-4"
                                    onClick={() => setShowModal(false)}
                                 >
                                    <button className="bg-[#4a4d60] inline-flex items-center text-gray1 px-3 md:px-4 py-1.5 rounded-xl mr-3 mb-2 md:mb-0">
                                       Close <GiCancel className="ml-2" />
                                    </button>
                                 </div>
                              </div>
                              {/*body*/}
                              <div className="md:px-5 pb-8 mt-3">
                                 <div className="grid md:grid-cols-2 md:gap-8 gap-5 ">
                                    <img
                                       data-aos="zoom-in-up"
                                       className="md:h-[250px] h-[230px]  w-full rounded-xl duration-1000 hover:shadow-[#0dccf2] hover:shadow-md"
                                       src={project?.picture1}
                                       alt=""
                                    />
                                    <img
                                       data-aos="zoom-in-up"
                                       className="md:h-[250px] h-[230px]  w-full rounded-xl duration-1000 hover:shadow-[#0dccf2] hover:shadow-md"
                                       src={project?.picture2}
                                       alt=""
                                    />
                                    <img
                                       data-aos="slide-right"
                                       className="md:h-[250px] h-[230px]  w-full rounded-xl duration-1000 hover:shadow-[#0dccf2] hover:shadow-md"
                                       src={project?.picture3}
                                       alt=""
                                    />
                                    <img
                                       data-aos="slide-left"
                                       className="md:h-[250px] h-[230px]  w-full rounded-xl duration-1000 hover:shadow-[#0dccf2] hover:shadow-md"
                                       src={project?.picture4}
                                       alt=""
                                    />
                                 </div>

                                 <div className="mt-6">
                                    <h3 className="md:text-2xl text-xl text-gray2 font-semibold mb-3">
                                       {project?.name}
                                    </h3>
                                    <div className="md:flex justify-end items-end">
                                       <a
                                          href={project?.liveLink}
                                          target="_blank"
                                          className="inline-flex text-gray1 font-semibold text-center justify-center items-center  px-4 py-1.5 rounded shadow  hover:shadow-primary shadow-primary mr-5 mb-3 md:mb-0"
                                       >
                                          Live Site
                                       </a>

                                       {project?.clientLink && (
                                          <a
                                             href={project?.clientLink}
                                             target="_blank"
                                             className="inline-flex text-gray1 font-semibold text-center justify-center items-center  px-4 py-1.5 rounded shadow  hover:shadow-primary shadow-primary mr-5"
                                          >
                                             Client Site
                                          </a>
                                       )}

                                       {project?.serverLink && (
                                          <a
                                             href={project?.serverLink}
                                             target="_blank"
                                             className="inline-flex text-gray1 font-semibold text-center justify-center items-center  px-4 py-1.5 rounded shadow  hover:shadow-primary shadow-primary mr-5"
                                          >
                                             Server Site
                                          </a>
                                       )}
                                    </div>
                                 </div>

                                 <div className="mt-6">
                                    <h3 className="md:text-xl text-lg text-gray2 font-semibold mb-2">
                                       Used Techknology
                                    </h3>
                                    <div className="flex flex-wrap">
                                       {project?.techknology?.map((tec) => (
                                          <button className="bg-[#4a4d60] text-gray1 px-3 md:px-4 py-1.5 rounded-xl mr-3 mb-2 ">
                                             {tec}
                                          </button>
                                       ))}
                                    </div>
                                 </div>

                                 <div className="text-gray1  mt-6">
                                    <h3 className="md:text-xl text-lg text-gray2 font-semibold mb-2">
                                       Descriptions
                                    </h3>

                                    {project?.description.map((dec) => (
                                       <div className="inline-flex  ">
                                          <span>
                                             {" "}
                                             <BsArrowRightCircle className="hover:text-primary duration-300 hover:mr-2 md:text-lg mt-1" />
                                          </span>
                                          <p className="md:text-lg text-base ml-2">
                                             {dec}
                                          </p>
                                       </div>
                                    ))}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </>
            ) : null}
         </>
      </div>
   );
};

export default DetailsModal;
