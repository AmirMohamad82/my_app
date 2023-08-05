import GoBack from "./GoBack";

const RouteGuard = ({ children }) => {
  return <>{!window.localStorage.getItem("token") ? <GoBack /> : children}</>;
};

export default RouteGuard;
