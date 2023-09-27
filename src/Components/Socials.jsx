
import { Link } from "react-router-dom";
import { AiFillGithub,AiFillLinkedin } from "react-icons/ai";
import { BiSolidBriefcase} from "react-icons/bi";


const Socials = () => {
  return (
     <div className="flex text-center item-center gap-x-5 text-3xl">
       <Link to="https://github.com/cruzmaldonado" target="_blank" rel="noopener noreferrer"
         className=" hover:text-accent transitial-all
     duration-300"
       >
         <AiFillGithub/>
       </Link>
       <Link
         to="https://www.linkedin.com/in/cruz-maldonado-charris-b67b2b244/" target="_blank" rel="noopener noreferrer"
         className=" hover:text-accent transitial-all
       duration-300"
         
       >
         <AiFillLinkedin  />
       </Link>
  

       <a className=" hover:text-accent transitial-all
         duration-300" href="./Cruz-Maldonado_CV.pdf" download="cruz-maldonado-curriculum.pdf"
                    title="descargar CV"  alt="download-CV">
                  <BiSolidBriefcase />
        </a>
       
       
       <Link
         to="/"
         
       >
         <BiSolidBriefcase className="hidden hover:text-accent transitial-all
     duration-300"/>
       </Link>
       
      
   
     </div>
  );
};

export default Socials;
