import Navbar from "../Components/Navbar/Navbar";
import Table from "../Components/Table/Table";
import Tasks from "../Components/TaskCard/Tasks";
import State from "../Components/Table/State";
import Loading from "../Components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { GoSignOut } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTasks } from "../Features/FeatureTask/TaskSlice";

const App = () => {
  const loading = useSelector((state) => state.task.loading);
  const tasks = useSelector((state) => state.task.tasks);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      alert("You are not logged in. Please login first");
      navigate("/login");
      return;
    }
    dispatch(fetchTasks());
  }, [dispatch, navigate]);


  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <Table />
      <State />
      {loading ? <Loading /> : <Tasks tasks={tasks} />}
      <GoSignOut
        style={{
          color: "red",
          cursor: "pointer",
          fontSize: "20px",
          marginRight: "10%",
          float: "right",
        }}
        data-bs-toggle="modal"
        data-bs-target="#logout"
      />
      <div className="modal fade" id="logout">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body text-center">
              <h4 className="mb-3">Are you sure you want to Logout?</h4>
              <button
                type="button"
                className="btn btn-danger col-3 m-2"
                data-bs-dismiss="modal"
              >
                No
              </button>
              <button
                type="button"
                className="btn btn-success col-3 m-2"
                data-bs-dismiss="modal"
                onClick={logout}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
