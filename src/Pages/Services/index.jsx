
import { AnimatePresence,motion } from "framer-motion";
import Layout from "../../Components/Layout"
import Transition from "../../Components/Transition";

import {} from "react-icons/rx"

export const serviceData =[]

import ServiceSlider from "../../Components/ServiceSlider"
import Buld from "../../Components/Bulb"
import Circles from "../../Components/Circles"
import {fadeIn} from "../../../variants"

const Services = () => {
  return(

<Layout>
      < AnimatePresence mode ="wait">

    <motion.div className='h-full'>

<Transition/>



<div className="h-full bg-primary/30 py-36 items-center">
  <Circles/>
  <div className="container mx-auto ">
    <div className="flex flex-col xl:flex-row gap-x-8">
      {/*  text*/}
      <div className="text-center flex xl:w-[30vw] flex-col lg:text-left
      mb-4 xl:mb-0">
        <h2 className="h2 xl:mt-8">My services <span className="text-accent">.</span></h2>
          <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">Lorem, ipsum d adipisicing elit. Quis voluptatum, motur illo?,Lorem, ipsum d adipisicing elit. Quis voluptatum, motur illo?,Lorem, ipsum d adipisicing elit. Quis voluptatum, motur illo?

          </p>
      </div>
      {/* slider */}
      <ServiceSlider/>
    </div>
  </div>
  <Buld/>
</div>



    </motion.div>
      </AnimatePresence>
</Layout>
  )
};

export default Services;
