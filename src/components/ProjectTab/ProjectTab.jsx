import { Fragment, useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import DetailsModal from "../DetailsModal/DetailsModal";
import Loader from "../Loader/Loader";
import { useLocation } from "react-router-dom";
const ProjectTab = () => {
   const [showModal, setShowModal] = useState(false);

   const [loading, setLoading] = useState(true);
   const [projects, setProjects] = useState([]);
   const [currentProject, setCurrentProject] = useState("");

   const path = useLocation();
   const pathname = path.pathname;

   useEffect(() => {
      setLoading(true);
      fetch("http://localhost:5000/project/Full-stack")
         .then((res) => res.json())
         .then((data) => {
            setProjects(data);
            setLoading(false);
         });
   }, []);

   const handleType = (type) => {
      console.log(type);
      fetch(`http://localhost:5000/project/${type}`)
         .then((res) => res.json())
         .then((data) => {
            setProjects(data);
            setLoading(false);
         });
   };

   return (
      <div>
         <Tab.Group>
            <Tab.List
               className={"grid md:grid-cols-3 grid-cols-1  md:w-[70%] mx-auto"}
            >
               <Tab as={Fragment}>
                  {({ selected }) => (
                     <button
                        onClick={() => handleType("Full-stack")}
                        className={`${
                           selected
                              ? "inline-flex bg-primary text-black"
                              : " inline-flex text-gray1  "
                        } font-semibold text-center justify-center focus:outline-none items-center w-full px-4 py-2  shadow  hover:shadow-primary shadow-primary`}
                     >
                        Full Stack
                     </button>
                  )}
               </Tab>
               <Tab as={Fragment}>
                  {({ selected }) => (
                     <button
                        onClick={() => handleType("Front-end")}
                        className={`${
                           selected
                              ? "inline-flex bg-primary text-black"
                              : " inline-flex text-gray1  "
                        } font-semibold text-center justify-center focus:outline-none items-center w-full px-4 py-2  shadow  hover:shadow-primary shadow-primary`}
                     >
                        Frontend
                     </button>
                  )}
               </Tab>
               <Tab as={Fragment}>
                  {({ selected }) => (
                     <button
                        onClick={() => handleType("Others")}
                        className={`${
                           selected
                              ? "inline-flex bg-primary text-black"
                              : " inline-flex text-gray1  "
                        } font-semibold text-center justify-center focus:outline-none items-center w-full px-4 py-2  shadow  hover:shadow-primary shadow-primary`}
                     >
                        Others
                     </button>
                  )}
               </Tab>
            </Tab.List>
            <Tab.Panels>
               <Tab.Panel className={"mt-10"}>
                  {loading ? (
                     <>
                        <Loader />{" "}
                     </>
                  ) : (
                     <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
                        {pathname === "/" ? (
                           <>
                              {projects?.slice(0, 3)?.map((project) => (
                                 <div className="card  relative">
                                    <figure className="h-[200px] w-full overflow-hidden">
                                       <img
                                          src={project.picture2}
                                          className=" rounded-lg duration-500 h-full w-full overflow-hidden "
                                          alt=""
                                       />
                                    </figure>
                                    <a
                                       className="absolute top-7 right-7 z-48"
                                       href={project.liveLink}
                                       target={"_blank"}
                                    >
                                       <BiWorld
                                          size={25}
                                          className="bg-slate-300 rounded-full "
                                       />
                                    </a>
                                    <div className="mt-3">
                                       <h4 className="text-gray2 text-2xl">
                                          {project.projectName}
                                       </h4>
                                       <p className="text-gray1 text-lg">
                                          {project?.description && (
                                             <>
                                                {project?.description[1]
                                                   ?.length > 75
                                                   ? `${project?.description[1].slice(
                                                        0,
                                                        75
                                                     )}.....`
                                                   : project?.description[1]}
                                             </>
                                          )}
                                       </p>
                                       <button
                                          onClick={() => {
                                             setShowModal(true);
                                             setCurrentProject(project);
                                          }}
                                          className="inline-flex mt-2 text-gray1 text-center justify-center items-center w-full px-4 py-2 rounded shadow hover:shadow-primary shadow-primary "
                                       >
                                          Details{" "}
                                          <AiOutlineArrowRight
                                             size={20}
                                             className="ml-2"
                                          />
                                       </button>
                                    </div>
                                 </div>
                              ))}
                           </>
                        ) : (
                           <>
                              {projects?.map((project) => (
                                 <div className="card  relative">
                                    <figure className="h-[200px] w-full overflow-hidden">
                                       <img
                                          src={project.picture2}
                                          className=" rounded-lg duration-500 h-full w-full overflow-hidden "
                                          alt=""
                                       />
                                    </figure>
                                    <a
                                       className="absolute top-7 right-7 z-48"
                                       href={project.liveLink}
                                       target={"_blank"}
                                    >
                                       <BiWorld
                                          size={25}
                                          className="bg-slate-300 rounded-full "
                                       />
                                    </a>
                                    <div className="mt-3">
                                       <h4 className="text-gray2 text-2xl">
                                          {project.projectName}
                                       </h4>
                                       <p className="text-gray1 text-lg">
                                          {project?.description && (
                                             <>
                                                {project?.description[1]
                                                   ?.length > 75
                                                   ? `${project?.description[1].slice(
                                                        0,
                                                        75
                                                     )}.....`
                                                   : project?.description[1]}
                                             </>
                                          )}
                                       </p>
                                       <button
                                          onClick={() => {
                                             setShowModal(true);
                                             setCurrentProject(project);
                                          }}
                                          className="inline-flex mt-2 text-gray1 text-center justify-center items-center w-full px-4 py-2 rounded shadow hover:shadow-primary shadow-primary "
                                       >
                                          Details{" "}
                                          <AiOutlineArrowRight
                                             size={20}
                                             className="ml-2"
                                          />
                                       </button>
                                    </div>
                                 </div>
                              ))}
                           </>
                        )}
                     </div>
                  )}
               </Tab.Panel>
               <Tab.Panel className={"mt-10"}>
                  {loading ? (
                     <>
                        <Loader />{" "}
                     </>
                  ) : (
                     <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
                        {pathname === "/" ? (
                           <>
                              {projects?.slice(0, 3)?.map((project) => (
                                 <div className="card  relative">
                                    <figure className="h-[200px] w-full overflow-hidden">
                                       <img
                                          src={project.picture2}
                                          className=" rounded-lg duration-500 h-full w-full overflow-hidden "
                                          alt=""
                                       />
                                    </figure>
                                    <a
                                       className="absolute top-7 right-7 z-48"
                                       href={project.liveLink}
                                       target={"_blank"}
                                    >
                                       <BiWorld
                                          size={25}
                                          className="bg-slate-300 rounded-full "
                                       />
                                    </a>
                                    <div className="mt-3">
                                       <h4 className="text-gray2 text-2xl">
                                          {project.projectName}
                                       </h4>
                                       <p className="text-gray1 text-lg">
                                          {project?.description && (
                                             <>
                                                {project?.description[1]
                                                   ?.length > 75
                                                   ? `${project?.description[1].slice(
                                                        0,
                                                        75
                                                     )}.....`
                                                   : project?.description[1]}
                                             </>
                                          )}
                                       </p>
                                       <button
                                          onClick={() => {
                                             setShowModal(true);
                                             setCurrentProject(project);
                                          }}
                                          className="inline-flex mt-2 text-gray1 text-center justify-center items-center w-full px-4 py-2 rounded shadow hover:shadow-primary shadow-primary "
                                       >
                                          Details{" "}
                                          <AiOutlineArrowRight
                                             size={20}
                                             className="ml-2"
                                          />
                                       </button>
                                    </div>
                                 </div>
                              ))}
                           </>
                        ) : (
                           <>
                              {projects?.map((project) => (
                                 <div className="card  relative">
                                    <figure className="h-[200px] w-full overflow-hidden">
                                       <img
                                          src={project.picture2}
                                          className=" rounded-lg duration-500 h-full w-full overflow-hidden "
                                          alt=""
                                       />
                                    </figure>
                                    <a
                                       className="absolute top-7 right-7 z-48"
                                       href={project.liveLink}
                                       target={"_blank"}
                                    >
                                       <BiWorld
                                          size={25}
                                          className="bg-slate-300 rounded-full "
                                       />
                                    </a>
                                    <div className="mt-3">
                                       <h4 className="text-gray2 text-2xl">
                                          {project.projectName}
                                       </h4>
                                       <p className="text-gray1 text-lg">
                                          {project?.description && (
                                             <>
                                                {project?.description[1]
                                                   ?.length > 75
                                                   ? `${project?.description[1].slice(
                                                        0,
                                                        75
                                                     )}.....`
                                                   : project?.description[1]}
                                             </>
                                          )}
                                       </p>
                                       <button
                                          onClick={() => {
                                             setShowModal(true);
                                             setCurrentProject(project);
                                          }}
                                          className="inline-flex mt-2 text-gray1 text-center justify-center items-center w-full px-4 py-2 rounded shadow hover:shadow-primary shadow-primary "
                                       >
                                          Details{" "}
                                          <AiOutlineArrowRight
                                             size={20}
                                             className="ml-2"
                                          />
                                       </button>
                                    </div>
                                 </div>
                              ))}
                           </>
                        )}
                     </div>
                  )}
               </Tab.Panel>
               <Tab.Panel className={"mt-10"}>
                  {loading ? (
                     <>
                        <Loader />{" "}
                     </>
                  ) : (
                     <>
                        {projects === [] ? (
                           <>
                              <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
                                 {projects?.map((project) => (
                                    <div className="card  relative">
                                       <figure className="h-[200px] w-full overflow-hidden">
                                          <img
                                             src={project.picture2}
                                             className=" rounded-lg duration-500 h-full w-full overflow-hidden "
                                             alt=""
                                          />
                                       </figure>
                                       <a
                                          className="absolute top-7 right-7 z-48"
                                          href={project.liveLink}
                                          target={"_blank"}
                                       >
                                          <BiWorld
                                             size={25}
                                             className="bg-slate-300 rounded-full "
                                          />
                                       </a>
                                       <div className="mt-3">
                                          <h4 className="text-gray2 text-2xl">
                                             {project.projectName}
                                          </h4>
                                          <p className="text-gray1 text-lg">
                                             {project?.description && (
                                                <>
                                                   {project?.description[1]
                                                      ?.length > 75
                                                      ? `${project?.description[1].slice(
                                                           0,
                                                           75
                                                        )}.....`
                                                      : project?.description[1]}
                                                </>
                                             )}
                                          </p>
                                          <button
                                             onClick={() => {
                                                setShowModal(true);
                                                setCurrentProject(project);
                                             }}
                                             className="inline-flex mt-2 text-gray1 text-center justify-center items-center w-full px-4 py-2 rounded shadow hover:shadow-primary shadow-primary "
                                          >
                                             Details{" "}
                                             <AiOutlineArrowRight
                                                size={20}
                                                className="ml-2"
                                             />
                                          </button>
                                       </div>
                                    </div>
                                 ))}
                              </div>
                           </>
                        ) : (
                           <div className="flex justify-center items-center mt-10">
                              <h4 className="text-gray1 md:text-5xl text-3xl">
                                 No project available...
                              </h4>
                           </div>
                        )}
                     </>
                  )}
               </Tab.Panel>
            </Tab.Panels>
         </Tab.Group>

         {currentProject && (
            <DetailsModal
               showModal={showModal}
               setShowModal={setShowModal}
               project={currentProject}
               setCurrentProject={setCurrentProject}
            />
         )}
      </div>
   );
};

export default ProjectTab;
