import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Lights from "./Lights";
import { Suspense } from "react";
import Android from '../components/3d/Android';
import Earth from '../components/3d/Earth';
import ButtonSvg from "../assets/svg/ButtonSvg";


const Roadmap = () => (
  <Section className="overflow-hidden" id="contact">
    <div className="container md:pb-10">
      <Heading tag="Ready to get started" title="Lets do it!" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1 w-full ">

                  {item.id != 2 && item.id != 3 && (
                    <Canvas className="flex-1 w-full h-full flex justify-center items-center ">
                      <ambientLight intensity={0.3} />
                      <PerspectiveCamera position={[0, 0, 10]} />
                      <Lights />
                      <OrbitControls
                        makeDefault
                        enableZoom={false}
                        enablePan={false}
                        rotateSpeed={0.4}
                        target={new THREE.Vector3(0, 0, 0)}

                      />
                      <group>
                        <Suspense fallback={<Html><div>Loading</div></Html>}>
                          {item.id == 0 && (<Android scale={[3, 3, 3]} />)}
                          {item.id == 1 && (<Earth scale={[1.5, 1.5, 1.5]} />)}

                        </Suspense>
                      </group>
                    </Canvas>
                  )
                  }


                  {item.id != 3 ?
                    (<h4 className="h4 mb-4">{item.title}</h4>)

                    : (
                      <a
                      className="button text-n-8 relative inline-flex items-center cursor-pointer justify-center h-11 transition-colors hover:text-color-1 px-7"
                      href="mailto:giorgilomaia9829@gmail.com?subject=From%20Portfolio"
                    >
                      <span className="relative z-10">click here and contact me!</span>
                      {ButtonSvg("white")}
                    </a>
                    
                    )}
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>

    </div>
  </Section>
);

export default Roadmap;