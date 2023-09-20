import { Link } from "react-router-dom";
import Socials from "../Components/Socials"

const Header = () => {
  return (

    <header className="absolute z-30 w-full flex items-center px-16 
    xl:px-0 xl:h-[90px] ">
      <div className="container mx-auto">
      <div>
      <h1 className=" hidden lg:flex text-3xl w-[380px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-red-600 ">
      CRUZ MALDONADO
    </h1>
      </div>
      </div>

    </header>
  )
};

export default Header;
