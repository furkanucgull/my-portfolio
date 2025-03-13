import {myProjects} from "../constants/index.js";
import {Suspense, useState} from "react";
import {Canvas} from "@react-three/fiber";
import {Center, OrbitControls} from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
import DemoComputer from "../components/DemoComputer.jsx";

const projectCount = myProjects.length;
const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };
  const currentProject = myProjects[selectedProjectIndex];
  return (
    <section className="c-space my-20">
      <p className="head-text">Some of My Projects</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-[#0E0E10]">
          <div className="absolute top-0 right-0 ">
            <img
              className="w-full h-96 object-cover rounded-xl"
              src={currentProject.spotlight}
              alt="spotligth"
            />
          </div>
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              className="w-10 h-10 shadow-sm"
              src={currentProject.logo}
              alt="logo"
            />
          </div>
          <div className="flex flex-col gap-5 text-[#AFB0B6] my-5">
            <p className="text-white text-2xl font-semibold animatedText ">
              {" "}
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc.map((desc,i)=>(
                <li key={i} className="list-none">{desc}</li>
            ))}</p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div className="tech-logo bg-neutral-100/10" key={index}>
                  <img src={tag.path} alt="tag" />
                </div>
              ))}
            </div>
            <a
              className="flex items-center gap-2 cursor-pointer text-[#62646C]"
              href={currentProject.href}
              target="_blank"
              rel=" noreferrer"
            >
              <p>Check Live Site</p>
              <img className="w-3 h-3" src="/assets/arrow-up.png" alt="" />
            </a>
          </div>
          <div className="flex justify-between items-center mt-7">
            <button
              onClick={() => handleNavigation("previous")}
              className="arrow-btn arrow-gradient"
            >
              <img src="/assets/left-arrow.png" alt="" />
            </button>{" "}
            <button
              onClick={() => handleNavigation("next")}
              className="arrow-btn arrow-gradient"
            >
              <img src="/assets/right-arrow.png" alt="" />
            </button>
          </div>
        </div>
        <div className="border border-[#1C1C21] bg-[#0E0E10] rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI / 2} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls
              maxPolarAngle={Math.PI / 2}
              enableZoom={true}
              minDistance={3}
              maxDistance={6}
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
};
export default Projects;
