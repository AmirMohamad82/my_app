import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./Pages/App";
import Login from "./Pages/Login";
import Layout from "./Pages/Layout";
import SignUp from "./Pages/SignUp";
import ErrorNotFound from "./Pages/ErrorNotFound";
import Store from "./Store/Store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/index.css";
import RouteGuard from "./Components/RouteGuard/RouteGuard";

const Index = () => {
  return (
    <Provider store={Store}>
      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<ErrorNotFound />} />
            <Route path="/" element={<Layout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/app"
              element={
                <RouteGuard>
                  <App />
                </RouteGuard>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default Index;

ReactDOM.render(<Index />, document.getElementById("root"));
