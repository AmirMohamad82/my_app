import Navbar from "./Navbar";
import Table from "./Table";
import Tasks from "./Tasks";
import State from "./State";
import { useEffect, useState } from "react";
// import i1 from "./../images/download.jpg";
// import i2 from "./../images/download.png";
// import i3 from "./../images/images (1).jpg";
// import i4 from "./../images/images (2).jpg";
// import i5 from "./../images/images.jpg";
import axios from "axios";
import Loading from "./Loading";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:4000/todos",{
        headers: {
          'Authorization':  "Bearer " + window.localStorage.getItem("token")
        }
      }
     ).then((res) => {
      setTasks(res.data);
      setLoading(false);
    });
  }, []);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000);
    const newTask = { id, ...task };
    setTasks([newTask, ...tasks]);
  };

  const deleteTask = (id) => {
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
