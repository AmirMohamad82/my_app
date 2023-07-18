import { Outlet, Link } from "react-router-dom";

const NavbarHome = ({ index }) => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-secondary py-5 py-lg-3 px-5 m-3 rounded-5">
      <div className="container-fluid">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item p-4">
            <Link to="/">
              <button
                className={
                  index === 1
                    ? "text-white btn btn-secondary active"
                    : "text-white btn btn-secondary"
                }
              >
                Home
              </button>
            </Link>
          </li>
          <li className="nav-item p-4">
            <Link to="/login">
              <button
                className={
                  index === 2
                    ? "text-white btn btn-secondary active"
                    : "text-white btn btn-secondary"
                }
              >
                Login
              </button>
            </Link>
          </li>
          <li className="nav-item p-4">
            <Link to="/signup">
              <button
                className={
                  index === 3
                    ? "text-white btn btn-secondary active"
                    : "text-white btn btn-secondary"
                }
              >
                Sign Up
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </nav>
  );
};

export default NavbarHome;
