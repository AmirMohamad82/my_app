import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import NavbarHome from "../Component/Navbar/NavbarHome";
import axios from "axios";

const SignUp = () => {
  const [state, setState] = useState(false);
  const [signup, setSignup] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("test");
    if (signup.password !== signup.repeatPassword) {
      alert("The password entered does not match its repetition");
      return;
    }
    axios
      .post("http://localhost:4000/register", {
        email: signup.email,
        password: signup.password,
      })
      .then((res) => {
        // localStorage.setItem("token", res.data.accessToken);
        // localStorage.setItem("id", res.data.user.id);
        // localStorage.setItem("email", res.data.user.email);
        setState(true);
        setSignup({
          email: "",
          password: "",
          repeatPassword: "",
        });
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };

  const change = (e) => {
    setSignup({
      ...signup,
      [e.target.name]: e.target.value,
    });
    console.log(signup);
  };

  return (
    <>
      <NavbarHome index={3} />
      {state ? (
        <div className="alert alert-success mt-5 container">
          <strong>Your Sign Up was successful !</strong>
          <Link to="/login">
            <button className="btn btn-success m-2 position-absolute top-0 end-0">
              Login
            </button>
          </Link>
        </div>
      ) : (
        ""
      )}
      <div className="container mt-5">
        <p className="mb-3 h2 col-12 text-center">Sign Up</p>
        <p className="m-3 mb-2">
          Please fill in this form to create an account.
        </p>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control m-2 rounded-3"
              placeholder="Email"
              required
              name="email"
              onChange={change}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control m-2 rounded-3"
              placeholder="Password"
              required
              name="password"
              onChange={change}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control m-2 rounded-3"
              placeholder="Repeat Password"
              required
              name="repeatPassword"
              onChange={change}
            />
          </div>
          <p className="m-3">
            By creating an account you agree to our{" "}
            <a href="/#" className="text-primary">
              Terms & Privacy
            </a>
            .
          </p>
          <div className="text-center">
            <input
              type="submit"
              value="Sign Up"
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

export default SignUp;
