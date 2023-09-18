
import { AnimatePresence,motion } from "framer-motion";
import Layout from "../../Components/Layout"
import Transition from "../../Components/Transition";


const WorksFrontEnd = () => {
  return (
    <Layout>
      < AnimatePresence mode ="wait">

    <motion.div   className='h-full'>

<Transition/>

<div>Work Front end</div>

    </motion.div>
      </AnimatePresence>
</Layout>
  )
}

export default WorksFrontEnd;
