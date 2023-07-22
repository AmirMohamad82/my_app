import Navbar from "../Components/Navbar/Navbar";
import Table from "../Components/Table/Table";
import Tasks from "../Components/TaskCard/Tasks";
import State from "../Components/Table/State";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Components/Loading/Loading";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    if (!window.localStorage.getItem("token")) {
      alert("You are not logged in. Please login first");
      navigate("/login");
      return;
    }
    axios
      .get("http://localhost:4000/todos", {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setTasks(res.data);
      })
      .catch(() => {
        alert("You don't have a task to show, so add a task first");
      });
    setLoading(false);
  }, [navigate]);

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
        setTasks([...tasks, res.data]);
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
        setTasks(tasks.filter((tasks) => tasks.id !== task.id));
      });
  };

  return (
    <>
      <Navbar />
      <Table onAdd={addTask} />
      <State ok={tasks} />
      {loading ? (
        <Loading />
      ) : tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        <div className="container text-danger h3">No tasks to show !</div>
      )}
    </>
  );
};

export default App;
