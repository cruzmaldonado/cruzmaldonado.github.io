

import { AnimatePresence,motion } from "framer-motion";
import Layout from "../../Components/Layout"
import Transition from "../../Components/Transition";



const WorksBackEnd = () => {
  return (
<Layout>
      < AnimatePresence mode ="wait">

    <motion.div  className='h-full'>
    {/* <motion.div  key={window.location.pathname} className='h-full'> */}

<Transition/>



<div>WorksBackEnd</div>
    </motion.div>
      </AnimatePresence>
</Layout>
  )
}

export default WorksBackEnd



