import { Fragment, useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import img from "../../assets/rifat.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import DetailsModal from "../DetailsModal/DetailsModal";
const ProjectTab = () => {
   const [showModal, setShowModal] = useState(false);

   const [loading, setLoading] = useState(true);
   const [projects, setProjects] = useState([]);
   const [currentProject, setCurrentProject] = useState("");

   useEffect(() => {
      setLoading(true);
      fetch("https://portfoliyo-server.vercel.app/project/Full-stack")
         .then((res) => res.json())
         .then((data) => {
            setProjects(data);
            setLoading(false);
         });
   }, []);

   const handleType = (type) => {
      if (type === "") {
         setLoading(true);
         fetch("https://portfoliyo-server.vercel.app/projects")
            .then((res) => res.json())
            .then((data) => {
               setProjects(data);
               setLoading(false);
            });
      } else setLoading(true);
      fetch(`https://portfoliyo-server.vercel.app/project/${type}`)
         .then((res) => res.json())
         .then((data) => {
            setProjects(data);
            setLoading(false);
         });
   };

   return (
      <div>
         <Tab.Group>
            <Tab.List className={"grid md:grid-cols-4 grid-cols-2 "}>
               <Tab as={Fragment}>
                  {({ selected }) => (
                     <button
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
               <Tab as={Fragment}>
                  {({ selected }) => (
                     <button
                        className={`${
                           selected
                              ? "inline-flex bg-primary text-black"
                              : " inline-flex text-gray1  "
                        } font-semibold text-center justify-center focus:outline-none items-center w-full px-4 py-2  shadow  hover:shadow-primary shadow-primary`}
                     >
                        Client
                     </button>
                  )}
               </Tab>
               {/* ...  */}
            </Tab.List>
            <Tab.Panels>
               <Tab.Panel className={"mt-10"}>
                  <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
                     {projects?.map((project) => (
                        <div className="card  relative">
                           <figure className="h-[230px] w-full overflow-hidden">
                              <img
                                 src={project.picture1}
                                 className=" rounded-lg duration-500 h-full w-full overflow-hidden "
                                 alt=""
                              />
                           </figure>
                           <a
                              className="absolute top-7 right-7 z-48"
                              href={project.live}
                              target={"_blank"}
                           >
                              <BiWorld
                                 size={25}
                                 className="bg-slate-300 rounded-full "
                              />
                           </a>
                           <div className="mt-3">
                              <h4 className="text-gray2 text-2xl">
                                 {project.name}
                              </h4>
                              <p className="text-gray1 text-lg">
                                 {project?.description[1].point.slice(0, 70)}
                                 .................
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
               </Tab.Panel>
               <Tab.Panel className={"mt-10"}>
                  <h1 className="text-gray-200 text-3xl">Coming soon </h1>
               </Tab.Panel>
               <Tab.Panel className={"mt-10"}>
                  <h1 className="text-gray-200 text-3xl">Coming soon wait </h1>
               </Tab.Panel>
               <Tab.Panel className={"mt-10"}>
                  <h1 className="text-gray-200 text-3xl">Coming soon dara </h1>
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
