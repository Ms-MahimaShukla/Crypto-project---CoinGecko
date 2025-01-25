import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";




function MainLayout(){

    return (
        <>
           {/* Render the Navbar at the top of the layout */}   
           {/* this navbar is the shared ui that we need across pages */}
        <Navbar/>
           {/* Render the child routes dynamically in this Outlet */}
           {/* this is the actual page that will be rendered along with the navbar */}
        <Outlet/>   
        
        </>
        
    )
}


export default MainLayout;