import axios from "axios";
import { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import NavbarHome from "../Component/Navbar/NavbarHome";

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/login", {
        email: login.email,
        password: login.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("id", res.data.user.id);
        localStorage.setItem("email", res.data.user.email);
        navigate("/app");
      })
      .catch((error) => {
        alert(error.response.data);
        // return Promise.reject(error);
      });
  };

  const change = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <NavbarHome index={2} />
      <div className="container mt-5">
        <p className="h1 mb-3 col-12 text-center">Welcome</p>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control m-2 rounded-3"
              placeholder="Email"
              name="email"
              required
              onChange={change}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control m-2 rounded-3"
              placeholder="Password"
              name="password"
              required
              onChange={change}
            />
          </div>
          <div className="text-center">
            <input
              type="submit"
              value="Login"
              className="btn btn-success m-2 rounded-3"
            />

            <Link to="/">
              <button className="btn btn-danger m-2 rounded-3">Cancel</button>
            </Link>
          </div>
        </form>
      </div>
      <Outlet />
    </>
  );
};

export default Login;
