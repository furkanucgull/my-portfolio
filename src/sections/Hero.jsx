import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import {Suspense} from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useControls} from "leva";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import HeroCamera from "../components/HeroCamera.jsx";

const Hero = () => {
  const x = useControls("HackerRoom", {
    positionX: { value: 2.5, min: -10, max: 10 },
    positionY: { value: 2.5, min: -10, max: 10 },
    positionZ: { value: 2.5, min: -10, max: 10 },
    rotationX: { value: 2.5, min: -10, max: 10 },
    rotationY: { value: 2.5, min: -10, max: 10 },
    rotationZ: { value: 2.5, min: -10, max: 10 },
    scale: { value: 1, min: 0.1, max: 10 },
  });
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 ">
        <p className="sm:text-3xl text-xl font-medium text-center text-white font-general">
          Hi I am Furkan <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient ">Building Products</p>
        <div className="w-full h-full absolute inset-0 ">
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HeroCamera isMobile={isMobile} >

              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0, -Math.PI, 0]}
                //position={[x.positionX, x.positionY, x.positionZ]}
                //rotation={[x.rotationX, x.rotationY, x.rotationZ]}
                //scale={[x.scale, x.scale, x.scale]}
              />
            </HeroCamera >
              <group>
                <Target position={sizes.targetPosition} />
                <ReactLogo position={sizes.reactLogoPosition} />
                <Cube position={sizes.cubePosition} />
              </group>
              <ambientLight inensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={0.5} />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};
export default Hero;
