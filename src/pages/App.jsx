import Navbar from "../Components/Navbar/Navbar";
import Table from "../Components/Table/Table";
import Tasks from "../Components/TaskCard/Tasks";
import State from "../Components/Table/State";
import Loading from "../Components/Loading/Loading";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoSignOut } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../Features/FeatureTask/TaskSlice";

const App = () => {
  // const loading = useSelector((state) => state.task.loading);
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.task.tasks);

  const navigate = useNavigate();

  useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      alert("You are not logged in. Please login first");
      navigate("/login");
      return;
    }
    dispatch(fetchTasks())
  }, [dispatch, navigate]);

  const addTask = (task) => {
    const userId = Number(window.localStorage.getItem("id"));
    const owner = userId;
    const newTask = { userId, owner, ...task };
    axios
      .post(
        "http://localhost:4000/todos",
        {
          userId: newTask.userId,
          owner: newTask.owner,
          title: newTask.title,
          description: newTask.description,
          date: newTask.unixTime,
          done: newTask.done,
        },
        {
          headers: {
            Authorization: "Bearer " + window.localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        // setTasks([...tasks, res.data]);
      });
  };

  const deleteTask = (task) => {
    if (Number(window.localStorage.getItem("id")) !== task.userId) {
      alert("This task is not for you");
      return;
    }
    axios
      .delete(`http://localhost:4000/todos/${task.id}`, {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
      })
      .then(() => {
        // setTasks(tasks.filter((tasks) => tasks.id !== task.id));
      });
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <Table onAdd={addTask} />
      <State ok={tasks} />
      {/* {loading ? (
        <Loading />
      ) :  */}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        <div className="container text-danger h3">No tasks to show !</div>
      )
      }
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
