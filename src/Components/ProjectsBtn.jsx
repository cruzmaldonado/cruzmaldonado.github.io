
import { Link } from "react-router-dom";
import {HiArrowRight} from "react-icons/hi2"


const ProjectsBtn = () => {
  return (

    <div className="mx-auto xl:mx-0 ">
  <Link to="/works-frontend" className="relative w-[185px] h-[185px] 
  flex justify-center items-center bg-circleStar bg-cover bg-center
  bg-no-repeat group">


    {/* //! aesta ruta no se renderiza en netlify acomodar como acomode el tailwind.config */}
    <img src="./src/images/rounded-text.png" 
    style={{width:"141px",height:"148px"}} 
    className="animate-spin-slow w-full h-full maw-w-[141px] max-h-[148px]"
    alt="MY PROJECTS" />
    <HiArrowRight className="absolute text-4xl 
    group-hover:translate-x-2 transition-all duration-300 "/>

    
  </Link>

    </div>
  )
};

export default ProjectsBtn;
