import { Outlet } from "react-router-dom";
import FooterBar from "../components/FooterBar";
import NavBar from "../components/NavBar";


const Layout = () => {
  return (

    <>
      <NavBar />

      <Outlet />
      <FooterBar />
    </>
  )
}

export default Layout;
