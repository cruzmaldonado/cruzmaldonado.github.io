import { Link } from "react-router-dom";
import Socials from "../Components/Socials"

const Header = () => {
  return (

    <header className="absolute z-30 w-full flex items-center px-16 
    xl:px-0 xl:h-[90px] ">
      <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 p-y-8">
        <Link to="/">
        
        <h1 className=" text-center text-3xl  font-bold bg-clip-text 
        text-transparent bg-gradient-to-r from-pink-400/100 to-red-600 ">
      CRUZ MALDONADO.
    </h1>
        </Link>   
        <Socials/>


      </div>
      </div>

    </header>
  )
};

export default Header;
