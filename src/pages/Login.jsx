import { Outlet, Link, useNavigate } from "react-router-dom";
import NavbarHome from "../Components/Navbar/NavbarHome";
import { fetchLogin, handleChange } from "../Features/FeatureLogin/LoginSlice";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { HiEyeOff, HiEye } from "react-icons/hi";
import { useEffect, useState } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.login.email);
  const password = useSelector((state) => state.login.password);
  const navigate = useNavigate();
  const [type, setType] = useState("password");
  const [eye, setEye] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      navigate("/app")
    }
  }, [navigate]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      fetchLogin({
        email,
        password,
        success: () => {
          navigate("/app");
        },
        fail: (error) => {
          toast.error(error, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
      })
    );
  };

  const change = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  const toggleEye = () => {
    if (type === "password") {
      setType("text");
      setEye(true);
    } else {
      setType("password");
      setEye(false);
    }
  };

  return (
    <>
      <NavbarHome index={2} />
      <div className="container mt-5">
        <p className="h1 mb-3 col-12 text-center">Welcome</p>
        <form onSubmit={onSubmit}>
          <div className="form-group input-group">
            <input
              type="email"
              className="form-control m-2 rounded-3"
              placeholder="Email"
              name="email"
              required
              onChange={change}
            />
          </div>
          <div className="form-group input-group">
            <input
              type={type}
              className="form-control m-2 me-0 rounded-3 rounded-end-0"
              placeholder="Password"
              name="password"
              required
              onChange={change}
            />
            <button
              className="btn btn-secondary m-2 rounded-3 ms-0 rounded-start-0"
              type="button"
              onClick={toggleEye}
            >
              {eye ? (
                <HiEyeOff style={{ fontSize: "20px" }} />
              ) : (
                <HiEye style={{ fontSize: "20px" }} />
              )}
            </button>
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
