import { Outlet } from "react-router-dom";
import FooterBar from "../components/FooterBar";
import NavBar from "../components/NavBar";


const Layout = () => {
  return (

    <>
      <body className="bg-mint-green-0 min-h-full" >
        <NavBar />

        <Outlet />
        <FooterBar />
      </body>

    </>
  )
}

export default Layout;
