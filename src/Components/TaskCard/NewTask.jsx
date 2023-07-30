import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTask, fetchTasks } from "../../Features/FeatureTask/TaskSlice";
import { toast } from "react-toastify";

const NewTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const done = false;
  const dispatch = useDispatch();

  const addTask = (task) => {
    dispatch(AddTask(task));
    dispatch(fetchTasks());
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title && !description && !date) {
      toast.warning("Please fill out the form correctly", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    const time = new Date(date);
    const unixTime = Math.floor(time.getTime() / 1000);

    addTask({ title, description, unixTime, done });

    setTitle("");
    setDescription("");
    setDate("");

    toast.success("Task added successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="des">Description:</label>
          <input
            id="des"
            type="text"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Date">Date:</label>
          <input
            id="Date"
            type="date"
            className="form-control"
            placeholder="Sunday 01:00 PM - 03:00 PM"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="text-center">
          <input
            type="submit"
            value="Add"
            className="btn btn-primary m-2 mt-3 rounded-3"
            data-bs-dismiss="modal"
          />
        </div>
      </form>
    </div>
  );
};

export default NewTask;
