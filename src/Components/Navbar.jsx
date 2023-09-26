import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiBookOpen,
  HiEnvelope,
} from "react-icons/hi2";






import { NavLink } from "react-router-dom";

const Navbar = () => {
  
  const activeStyle = "text-accent";
  return (
    <nav
      className=" flex  flex-col items-center  gap-y-4 fixed 
    h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen "
    >
      <div
        style={{ alignItems: "center" }}
        className="align-middle flex w-full xl:flex-col   item-center justify-between xl:justify-center gap-y-8 px-4 md:px-40 xl:px-0
      h-5 xl:h-max text-white py-8 bg-white/10 backdrop-blur-sm text-2xl xl:text-sm xl:rounded-full m-auto
      "
      >
        <div
          className="relative flex items-center group hover:text-accent
        transition-all duration-300 "
        > 
       

          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
            {/* tolltip */}
            <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
              <div className="bg-white relative flex text-primary items-center 
              p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">HOME
                </div>
                {/* triangle */}
                <div className="border-solid border-l-white border-l-8 border-y-transparent
                border-y-[6px] border-r-0 absolute -right-2"></div>
              </div>
            </div>

            <HiHome />
            

          </NavLink>
          
        </div>

        <div
          className="relative flex items-center group hover:text-accent
        transition-all duration-300 "
        >
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {/* tolltip */}
            <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
              <div className="bg-white relative flex text-primary items-center 
              p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">ABOUT
                </div>
                {/* triangle */}
                <div className="border-solid border-l-white border-l-8 border-y-transparent
                border-y-[6px] border-r-0 absolute -right-2"></div>
              </div>
            </div>
            <HiUser />
          </NavLink>
        </div>

        <div
          className="relative flex items-center group hover:text-accent
        transition-all duration-300 "
        >
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {/* tolltip */}
            <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
              <div className="bg-white relative flex text-primary items-center 
              p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">SERVICES
                </div>
                {/* triangle */}
                <div className="border-solid border-l-white border-l-8 border-y-transparent
                border-y-[6px] border-r-0 absolute -right-2"></div>
              </div>
            </div>
            <HiRectangleGroup />
          </NavLink>
        </div>
        <div
          className="relative flex items-center group hover:text-accent
        transition-all duration-300 "
        >
          <NavLink
            to="/works-frontend"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >{/* tolltip */}
          <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
            <div className="bg-white relative flex text-primary items-center 
            p-[6px] rounded-[3px]">
              <div className="text-[12px] leading-none font-semibold capitalize">FRONT
              </div>
              {/* triangle */}
              <div className="border-solid border-l-white border-l-8 border-y-transparent
              border-y-[6px] border-r-0 absolute -right-2"></div>
            </div>
          </div>
            <HiViewColumns />
          </NavLink>
        </div>

        <div
          className="relative flex items-center group hover:text-accent
        transition-all duration-300 "
        >
          <NavLink
            to="/Works-backend"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {/* tolltip */}
            <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
              <div className="bg-white relative flex text-primary items-center 
              p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">BACK
                </div>
                {/* triangle */}
                <div className="border-solid border-l-white border-l-8 border-y-transparent
                border-y-[6px] border-r-0 absolute -right-2"></div>
              </div>
            </div>
            <HiBookOpen />
          </NavLink>
        </div>
        <div
          className="relative flex items-center group hover:text-accent
        transition-all duration-300 "
        >
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >{/* tolltip */}
          <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
            <div className="bg-white relative flex text-primary items-center 
            p-[6px] rounded-[3px]">
              <div className="text-[12px] leading-none font-semibold capitalize">CONTACT
              </div>
              {/* triangle */}
              <div className="border-solid border-l-white border-l-8 border-y-transparent
              border-y-[6px] border-r-0 absolute -right-2"></div>
            </div>
          </div>
            <HiEnvelope />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
