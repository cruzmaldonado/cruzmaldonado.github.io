import {
    HiHome,
    HiUser,
    HiViewColumns,
    HiRectangleGroup,
    HiBookOpen,
    HiEnvelope,
   
  } from 'react-icons/hi2';
  
import {NavLink } from 'react-router-dom'



const Navbar = () => {

// const activeStyle='underline underline-offset-4'
  const activeStyle=''
  return (
    <nav>
      <NavLink to ='ERWE'>hola</NavLink>
      <div>
        <div>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
           <HiHome />
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <HiUser />
          </NavLink>
        </div>
        <div>
           
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <HiRectangleGroup />
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/works-frontend"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <HiViewColumns />
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/Works-backend"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <HiBookOpen />
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <HiEnvelope />
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar