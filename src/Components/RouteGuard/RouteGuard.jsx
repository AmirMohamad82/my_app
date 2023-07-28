import { Navigate } from "react-router-dom";

const RouteGuard = ({ children }) => {
  if (!window.localStorage.getItem("token")) {
    alert("You are not logged in. Please login first");
    return <Navigate to="/login" replace />;
  } else {
    return children;
  }
};

export default RouteGuard;
