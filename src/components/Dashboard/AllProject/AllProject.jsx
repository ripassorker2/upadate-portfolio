import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import Loader from "../../Loader/Loader";
import DetailsModal from "../../DetailsModal/DetailsModal";

const AllProject = () => {
   const [loading, setLoading] = useState(true);
   const [projects, setProjects] = useState([]);
   const [currentProject, setCurrentProject] = useState("");
   const [showModal, setShowModal] = useState(false);

   useEffect(() => {
      setLoading(true);
      fetch("https://portfoliyo-server.vercel.app/projects")
         .then((res) => res.json())
         .then((data) => {
            setProjects(data);
            setLoading(false);
         });
   }, []);

   if (loading) {
      return <Loader />;
   }
   return (
      <div className="md:grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 md:w-[90%] mx-auto overflow-y-auto  my-9 hidden">
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
                              {project?.description[1]?.length > 75
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
                        <AiOutlineArrowRight size={20} className="ml-2" />
                     </button>
                  </div>
               </div>
            ))}
         </>

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

export default AllProject;
