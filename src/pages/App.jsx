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
import { toast } from "react-toastify";

const App = () => {
  const loading = useSelector((state) => state.task.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchTasks({
        error: (error) => {
          console.log("test");
          toast.error(error, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
      })
    );
  }, [dispatch]);

  return (
    <>
      <Welcome />
      <User />
      <Navbar />
      <Table />
      <State />
      {loading ? <Loading /> : <Tasks />}
    </>
  );
};

export default App;
