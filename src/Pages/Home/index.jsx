

import { AnimatePresence,motion } from "framer-motion";
import Layout from "../../Components/Layout"
import Transition from "../../Components/Transition";


const Home = () => {
  return (
    <Layout>
    < AnimatePresence mode ="wait">

<motion.div  className='h-full'>

<Transition/>



<div className='w-20 h-20 bg-red-400'>
      
      hola


      <h1 className="text-3xl font-bold underline bg-red-400">
      Se acomodo el navbar
    </h1>
    </div>
</motion.div>
  </AnimatePresence>


    
   
    
    </Layout>
  )
}

export default Home