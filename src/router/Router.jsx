import { createBrowserRouter } from "react-router-dom";
import CreateButterfly from "../pages/CreateButterfly";
import EditedButterfly from "../pages/EditedButterfly";
import ButterflyDetail from "../pages/ButterflyDetail";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import TestCard from "../pages/TestCard";

const routerButterfly = createBrowserRouter([{
 path :"/",
 element: <Layout/>,
    children: [
        {
        index: true,
        element: <Home/>,
        },
        {
            path: "/newbutterfly", 
            element: <CreateButterfly/>
        },
        {
            path: "/editbutterfly:id",
            element: <EditedButterfly/>
        },
       {
        path: "/butterflydetails/:id",
        element: <ButterflyDetail/>
       }, 
       {
        path: "/contact", 
        element: <Contact/>
       },
       {
        path: "/test-card",
        element: <TestCard/>
       }
    ]

}])
export default routerButterfly;