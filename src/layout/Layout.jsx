import { Outlet } from "react-router-dom";
import FooterBar from "../components/FooterBar";


const Layout = () => {
  return (

    <>
   <NavBar/>

    <Outlet/>
    <FooterBar/>
    </>
  )
}

export default Layout;
