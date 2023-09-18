import { AnimatePresence,motion } from "framer-motion";
import Layout from "../../Components/Layout"
import Transition from "../../Components/Transition";


const Contact = () => {

  return(

    
<Layout>
      < AnimatePresence mode ="wait">

    <motion.div  className='h-full'>

<Transition/>

      <div>Contact</div>

    </motion.div>
      </AnimatePresence>
</Layout>
    )
};

export default Contact;
