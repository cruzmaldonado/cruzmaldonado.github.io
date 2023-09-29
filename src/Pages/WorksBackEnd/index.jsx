

import { AnimatePresence,motion } from "framer-motion";
import Layout from "../../Components/Layout"
import Transition from "../../Components/Transition";

import Buld from "../../Components/Bulb";
import Circles from "../../Components/Circles";
import { fadeIn } from "../../../variants";
import WorkBackSlider from "../../Components/WorkBackSlider";




const WorksBackEnd = () => {
  return (
<Layout>
      < AnimatePresence mode ="wait">

    <motion.div  className='h-full'>
 

<Transition/>


{/* aqui comienza */}

<div className="h-full bg-primary/30 py-36 items-center">
            <Circles />
            <div className="container mx-auto ">
              <div className="flex flex-col xl:flex-row gap-x-8">
                {/*  text*/}
                <div
                  className="text-center flex xl:w-[30vw] flex-col lg:text-left
      mb-4 xl:mb-0"
                >
                  <motion.h2
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="h2 xl:mt-8"
                  >
                    My services Back-end <span className="text-accent">.</span>
                  </motion.h2>
                  <motion.p 
                  variants={fadeIn("up ", 0.4)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="mb-4 max-w-[400px] mx-auto lg:mx-0">
                     Create a custom back-end that meets your specific needs
                   and drives business success.  By leveraging the power 
                   of Node.js and Sequelize. 
                  </motion.p>
                </div>


                <motion.div 
                variants={fadeIn("down", 0.6)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="w-full xl:max-w-[65%]">
                  {/* slider */}
                  <WorkBackSlider />
                </motion.div>
              </div>
            </div>
            <Buld />
          </div>

    </motion.div>
      </AnimatePresence>
</Layout>
  )
}

export default WorksBackEnd



