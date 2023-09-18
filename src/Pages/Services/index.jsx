
import { AnimatePresence,motion } from "framer-motion";
import Layout from "../../Components/Layout"
import Transition from "../../Components/Transition";

const Services = () => {
  return(

<Layout>
      < AnimatePresence mode ="wait">

    <motion.div className='h-full'>

<Transition/>



<div>Services</div>
    </motion.div>
      </AnimatePresence>
</Layout>
  )
};

export default Services;
