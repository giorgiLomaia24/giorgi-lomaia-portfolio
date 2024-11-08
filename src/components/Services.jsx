import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import * as THREE from 'three';
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Lights from "./Lights";
import { Suspense } from "react";
import Dinozaur from "./3d/Dinozaur";
import ThreeJs from "./3d/ThreeJs";
import Bee from '../components/3d/Bee';

const Services = () => {
  return (
    <Section id="approach">
      <div className="container">
        <Heading
          title="What am I working on?"
          text="I'm developing a course focused on harnessing the power of Three.js to enhance the quality of 3D rendering in business applications, aiming to foster a vibrant community and boost market value."
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
              <Canvas className="flex-1 w-full h-full pt-3 flex justify-center items-center ">
                <ambientLight intensity={0.3} />
                <PerspectiveCamera position={[0, 0, 4]} />
                <Lights />
                <OrbitControls
                  makeDefault
                  enableZoom={false}
                  enablePan={false}
                  rotateSpeed={0.4}
                target={new THREE.Vector3(0, 0, 0)}
                          
                />
                <group>
                <Suspense fallback={<Html><div>Loading</div></Html> }>
                  <Dinozaur scale={[2, 2, 2]} rotation={[0.3, 0.5, 0]} />
                </Suspense>
                </group>             
              </Canvas>
          

            <div className="relative z-1 max-w-[17rem] ml-auto pointer-events-none ">
              <h4 className="h4 mb-4 ">Core Steps In Syllabus</h4>
            
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
              <Canvas className="flex-1 w-full h-full pt-3 flex justify-center items-center ">
                <ambientLight intensity={0.3} />
                <PerspectiveCamera position={[0, 0, 10]} />
                <Lights />
                <OrbitControls
                  makeDefault
                  enableZoom={true}
                  enablePan={false}
                  rotateSpeed={0.4}
                target={new THREE.Vector3(0, 0, 0)}
                          
                />
                <group>
                <Suspense fallback={<Html><div>Loading</div></Html> }>
                     <ThreeJs/>
                </Suspense>
                </group>             
              </Canvas>
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Threejs  journey</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                A Three.js course teaches you how to create interactive 3D graphics and animations for the web using JavaScript and the powerful Three.js library.
                </p>
              </div>

              {/* <PhotoChatMessage /> */}
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
            <Canvas className="flex-1 w-full h-full pt-3 flex justify-center items-center ">
                <ambientLight intensity={0.3} />
                <PerspectiveCamera position={[0, 0, 4]} />
                <Lights />
                <OrbitControls
                  makeDefault
                  enableZoom={false}
                  enablePan={false}
                  rotateSpeed={0.4}
                target={new THREE.Vector3(0, 0, 0)}
                          
                />
                <group>
                <Suspense fallback={<Html><div>Loading</div></Html> }>
                  <Bee scale={[0.3, 0.3, 0.3]} rotation={[0.3, 1, 0]} />
                </Suspense>
                </group>             
              </Canvas>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;