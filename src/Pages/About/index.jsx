// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaBootstrap,
  FaWordpress,
  FaNodeJs,
  FaGitSquare
} from "react-icons/fa";

import { AnimatePresence, motion } from "framer-motion";
import Layout from "../../Components/Layout";
import Transition from "../../Components/Transition";


import {

  SiTailwindcss,

  SiSequelize,
  SiPostgresql,
  SiExpress,
  SiNotion
} from "react-icons/si";


import React, { useState } from "react";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Front-end development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <FaBootstrap />,
          <SiTailwindcss/>,
          <FaWordpress />,
        ],
      },
      {
        title: "Back-end development",
        icons: [
        <FaNodeJs/>,
         <SiSequelize />, 
         <SiPostgresql />, 
         <SiExpress />, 
         
        ],
      },
      {
        title: "Other tools",
        icons: [
        <FaGitSquare/>,
        <SiNotion/>,
         ".bubble", 
        <svg  width="25" height="25" fill="white" viewBox="0 0 671.194 680.2487"><path d="M626.9464,278.4037a169.4492,169.4492,0,0,0-14.5642-139.187A171.3828,171.3828,0,0,0,427.7883,56.9841,169.45,169.45,0,0,0,299.9746.0034,171.3985,171.3985,0,0,0,136.4751,118.6719,169.5077,169.5077,0,0,0,23.1574,200.8775,171.41,171.41,0,0,0,44.2385,401.845,169.4564,169.4564,0,0,0,58.8021,541.0325a171.4,171.4,0,0,0,184.5945,82.2318A169.4474,169.4474,0,0,0,371.21,680.2454,171.4,171.4,0,0,0,534.7642,561.51a169.504,169.504,0,0,0,113.3175-82.2063,171.4116,171.4116,0,0,0-21.1353-200.9ZM371.2647,635.7758a127.1077,127.1077,0,0,1-81.6027-29.5024c1.0323-.5629,2.8435-1.556,4.0237-2.2788L429.13,525.7575a22.0226,22.0226,0,0,0,11.1306-19.27V315.5368l57.25,33.0567a2.0332,2.0332,0,0,1,1.1122,1.568V508.2972A127.64,127.64,0,0,1,371.2647,635.7758ZM97.3705,518.7985a127.0536,127.0536,0,0,1-15.2074-85.4256c1.0057.6037,2.7624,1.6768,4.0231,2.4012L221.63,514.01a22.04,22.04,0,0,0,22.2492,0L409.243,418.5281v66.1134a2.0529,2.0529,0,0,1-.818,1.7568l-136.92,79.0534a127.6145,127.6145,0,0,1-174.134-46.6532ZM61.7391,223.1114a127.0146,127.0146,0,0,1,66.3545-55.8944c0,1.1667-.067,3.2329-.067,4.6665V328.3561a22.0038,22.0038,0,0,0,11.1173,19.2578l165.3629,95.4695-57.2481,33.055a2.0549,2.0549,0,0,1-1.9319.1752l-136.933-79.1215A127.6139,127.6139,0,0,1,61.7391,223.1114ZM532.0959,332.5668,366.7308,237.0854l57.25-33.0431a2.0455,2.0455,0,0,1,1.93-.1735l136.934,79.0535a127.5047,127.5047,0,0,1-19.7,230.055V351.8247a21.9961,21.9961,0,0,0-11.0489-19.2579Zm56.9793-85.7589c-1.0051-.6174-2.7618-1.6769-4.0219-2.4L449.6072,166.1712a22.07,22.07,0,0,0-22.2475,0L261.9963,261.6543V195.5409a2.0529,2.0529,0,0,1,.818-1.7567l136.9205-78.988a127.4923,127.4923,0,0,1,189.34,132.0117ZM230.8716,364.6456,173.6082,331.589a2.0321,2.0321,0,0,1-1.1122-1.57V171.8835A127.4926,127.4926,0,0,1,381.5636,73.9884c-1.0322.5633-2.83,1.5558-4.0236,2.28L242.0957,154.5044a22.0025,22.0025,0,0,0-11.1306,19.2566Zm31.0975-67.0521L335.62,255.0559l73.6488,42.51v85.0481L335.62,425.1266l-73.6506-42.5122Z"/></svg>
      ],
      }
    ],
  },
  
  {
    title: "credentials",
    info: [
      {
        title: "Back-End Development with Node.js- Academlo. ",

      },
      {
        title: "Front-End Development with React- Academlo. ",
        
      },
      {
        title: "Curso de React.js con Vite.js y TailwindCSS.",
        
      },
      
      {
        title: "Curso de Prompt Engineering con ChatGPT.",
        
      },
      {
        title: "Curso de SEO y posicionamiento en Google.",
        
      }
    ],
  },
];

import Circles from "../../Components/Circles";
import { fadeIn } from "../../../variants";
import CountUp from "react-countup"

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div className="h-full">
          <Transition />

          <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
            <Circles />
            
            <div
              className="xl:mt-16  container  mx-auto h-full w-full flex flex-col items-center
                xl:flex-row gap-x-6  "
                
            >
               {/* text */}
              <div  
              className="flex-1 flex flex-col justify-center gap-y-1">
               <motion.h2
               variants={fadeIn("right", 0.2)}
               initial="hidden"
               animate="show"
               exit="hidden"
                className="h2"> Captivating <span className="text-accent">Stories </span> Birth magnificent designs.</motion.h2>
               <motion.p
               variants={fadeIn("right", 0.4)}
               initial="hidden"
               animate="show"
               exit="hidden"
               className="max-w-[500px] mx-auto xl:mx-0 mb-2 px-2 xl:px-0">
                I am a passionate full-stack web developer with experience in React, Tailwind, Node, and prompt engineer with IA. With a strong interest in innovation and technology.
               </motion.p>
               {/* counters */}
               <motion.div
               variants={fadeIn("right", 0.6)}
               initial="hidden"
               animate="show"
               exit="hidden"
               className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
                <div className="flex flex-1 xl:gap-x-6">
                  {/* experience */}
                  <div className="relative flex-1 after:w-[1px] after:h-full
                  after:bg-white/10 after:absolute after:top-0 after:rifht-0">
                    <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                      <CountUp start={0} end={2} duration={8}/>+
                    </div>
                   <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of experience</div>
                  </div>
                  {/* clients */}

                  <div className="relative flex-1 after:w-[1px] after:h-full
                  after:bg-white/10 after:absolute after:top-0 after:rifht-0">
                    <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                      <CountUp start={0} end={30} duration={8}/>+
                    </div>
                   <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                   finished projects</div>
                  </div>
                  {/*  */}


                </div>
               </motion.div>
              </div>
              {/* info */}
              <motion.div
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
                <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
                  {aboutData.map((item, itemIndex) => {
                    return (
                      <div
                        key={itemIndex}
                        className={`${
                          index === itemIndex &&
                          'text-accent  after:w-[100%] after:bg-accent after:transition-all after:duration-300'}
                           capitalize cursor-pointer
                          xl:text-lg relative after:w-8 after:h-[2px] 
                          after:bg-white after:absolute after:-bottom-1 after:left-0`}
                          onClick={()=>setIndex(itemIndex)}
                      >
                        <div onClick={()=>setIndex(itemIndex)} className="cursor-pointer">{item.title}</div>
                      </div>
                    );
                  })}
                </div>
                <div className="py-2 xl:py-6 flex
                flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
                  {aboutData[index].info.map((item,itemIndex)=>{
                    return (

                      <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 
                      items-center text-white/60">
                        <div className="font-light mb-2 md:mb-0">{item.title}</div>
                        <div className="hidden md:flex ">-</div>
                        <div >{item.stage}</div>
                          {/* Icons */}
                        <div className="flex gap-x-4">
                        {item.icons?.map((icon,itemIndex)=>{
                          return (
                          <div key={itemIndex} className="text-2xl text-white ">{icon}</div>
                            )
                        })}
                          </div>
                        
                    </div>
                      )
                  })}
                </div>
              </motion.div>
            </div>

           
          </div>
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
};

export default About;
