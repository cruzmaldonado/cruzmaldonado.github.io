import { AnimatePresence, motion } from "framer-motion";
import Layout from "../../Components/Layout";
import Transition from "../../Components/Transition";
import ParticlesContainer from "../../Components/ParticlesContainer";
import ProjectsBtn from "../../Components/ProjectsBtn";
import Avatar from "../../Components/Avatar";

//variants
import { fadeIn } from "../../../variants";

const Home = () => {
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div className="h-full">
          <Transition />
          <div className="bg-primary/60 h-full">
            <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 ">
              <div className="text-center flex flex-col justify-center  xl:text-left h-full container mx-auto my-4">
                <motion.h1
                  variants={fadeIn("down", 0.9)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  
                  className="h1 mt-2"
                >
                  Transforming Ideas
                  <br />
                  Into <span className="text-accent">Digital Reality</span>
                </motion.h1>
                <motion.p
                  variants={fadeIn("down", 1)}
                  
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="max-w-sm xl:max-w-xl mx-auto xl:mx-0  xl:mb-4 "
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
                  repudiandae quasi at non nesciunt aut ipsam temporibus vel
                  dolore. Illum error vitae eum unde, magnam quisquam ? .
                </motion.p>
                {/* btn */}
                <div className="flex justify-center xl:hidden relative ">
                  <ProjectsBtn />
                </div>
                <motion.div
                  variants={fadeIn("down", 1.1)}
                 
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="hidden xl:flex"
                >
                  <ProjectsBtn />
                </motion.div>
              </div>
            </div>

            <div className="w-[800px] h-full absolute right-0 bottom-0">
              {/* bg image */}
              <div className="bg-none xl:bg-explosion lg bg-cover xl:bg-right 
              lg-bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
                
                </div>
                {/* particles */}
                  <ParticlesContainer/>
                {/* avatar img */}
                <motion.div
                variants={fadeIn("up", 1.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                transition={{duration:1,ease:'easeInOut'}}
                className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-60
                 xl:-right-[35%]">
                  <Avatar/>
                </motion.div>

            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
};

export default Home;
