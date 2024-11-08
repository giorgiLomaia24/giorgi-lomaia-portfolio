import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { useState } from "react";
import { useSpring,motion } from "framer-motion";
import { line } from "framer-motion/client";

const Benefits = () => {
  const [img, setImg] = useState({
    src: '',
    alt: '',
    opacity: 0
  });

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1
    
  }

  const imagePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring)
  }

  const handleMove = (e, idx) => {
    const { clientX, clientY } = e;
    
    imagePosition.x.set(clientX );
    imagePosition.y.set(clientY)
  }
  return (
    <Section id="projects">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Projects of my choice"
        />

        <div className="flex flex-wrap gap-10 mb-10"  onMouseMove={handleMove}>
          {benefits.map((item) => (
            <div
             
              onMouseEnter={() => setImg({ src: item.imageUrl, alt: item.title, opacity: 1 })}
              onMouseLeave={() => setImg({ src: "", alt: "", opacity: 0 })}
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] border border-purple-300"
              
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <a   target="_blank" rel="noopener noreferrer" href={item.link} className="cursor-pointer ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider hover:text-purple-500">
                    Launch project
                  </a>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
             
              </div>

              <ClipPath />
            </div>
          ))}
          <motion.img
            src={img.src}
            alt={img.alt}
            className="hovered_img  absolute z-4 max-w[230px] max-h-[230px] "
            style={{
              y: imagePosition.y,
              x: imagePosition.x,
              opacity: img.opacity
            }}
          />
        </div>
      </div>
    </Section>
  );
};

export default Benefits;