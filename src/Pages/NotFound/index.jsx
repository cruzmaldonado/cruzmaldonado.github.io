

import { AnimatePresence,motion } from "framer-motion";
import Layout from "../../Components/Layout"
import Transition from "../../Components/Transition";
const NotFound = () => {
  return (

<Layout>
      < AnimatePresence mode ="wait">

    <motion.div  className='h-full'>

<Transition/>



<div className='flex flex-col justify-center items-center'>
        estas en 404
        <h1 className='text-white  h1 text-center'>Esta pagina no existe</h1>
        <img src="https://midu.dev/images/this-is-fine-404.gif" alt="Pagina no existe" />
    </div>
    </motion.div>
      </AnimatePresence>
</Layout>





  )
}

export default NotFound