import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Pages/App";
import Login from "./Pages/Login";
import Layout from "./Pages/Layout";
import SignUp from "./Pages/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorNotFound from "./Pages/ErrorNotFound";
import "./Style/index.css";

const Index = () => {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<ErrorNotFound />} />
          <Route path="/" element={<Layout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/app" element={<App />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Index;

ReactDOM.render(<Index />, document.getElementById("root"));
