import { Outlet } from "react-router-dom";
import Home from "./Home";
import NavbarHome from "./NavbarHome";


const Layout = () => {
    return ( 
        <>
            <NavbarHome index={1}/>
            <Home />
            <Outlet />
        </>
    );
}
 
export default Layout;