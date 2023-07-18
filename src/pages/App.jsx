import Navbar from "../Component/Navbar/Navbar";
import Table from "../Component/Table/Table";
import Tasks from "../Component/TaskCard/Tasks";
import State from "../Component/Table/State";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Component/Loading/Loading";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:4000/todos", {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setTasks(res.data);
        setLoading(false);
      })
      .catch(alert);
  }, []);

  const addTask = (task) => {
    const userId = window.localStorage.getItem("id");
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

  const deleteTask = (id) => {
    axios.delete(`http://localhost:4000/todos/${id}`, {
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    });
    setTasks(tasks.filter((task) => task.id !== id));
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
