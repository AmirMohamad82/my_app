import Navbar from "../Components/Navbar/Navbar";
import Table from "../Components/Table/Table";
import Tasks from "../Components/TaskCard/Tasks";
import State from "../Components/Table/State";
import Loading from "../Components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTasks } from "../Features/FeatureTask/TaskSlice";
import User from "../Components/Navbar/User";
import Welcome from "../Components/Welcome/Welcome";

const App = () => {
  const loading = useSelector((state) => state.task.loading);
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <Welcome />
      <User />
      <Navbar />
      <Table />
      <State />
      {loading ? <Loading /> : <Tasks tasks={tasks} />}
    </>
  );
};

export default App;
