import { Outlet } from "react-router-dom";
import Home from "../Component/LayoutPage/Home";
import NavbarHome from "../Component/Navbar/NavbarHome";

const Layout = () => {
  return (
    <>
      <NavbarHome index={1} />
      <Home />
      <Outlet />
    </>
  );
};

export default Layout;
