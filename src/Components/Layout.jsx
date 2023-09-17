import Navbar from "../Components/Navbar"
import Header from "../Components/Header"
import TopLeftImg from "../Components/TopLeftImg"

const Layout = ({children}) => {
    return (
  
        <div className={`page bg-site text-white bg-cover
        bg-no-repeat font-sora relative`}>
           
      <Header/>
      <TopLeftImg/>
          {children}
        </div>
    )
  };

export default Layout