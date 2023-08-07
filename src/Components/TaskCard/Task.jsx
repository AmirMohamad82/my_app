import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import i3 from "./../../Images/images (1).jpg";
import i4 from "./../../Images/images (2).jpg";
import i1 from "./../../Images/download.jpg";
import Date from "../ConvertDate/Date";
import { useDispatch } from "react-redux";
import {
  DeleteTask,
  fetchTasks,
  updateTask,
} from "../../Features/FeatureTask/TaskSlice";
import { toast } from "react-toastify";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [finish, setFinish] = useState(task.done);
  let dv = "dv";
  let Class = "text-dark ";
  let tasks = "task";
  const people = [`${i3}`, `${i1}`, `${i4}`];
  const owner = Number(window.localStorage.getItem("id"));

  const img = (index, item) => {
    let max = 2;
    return index > max ? (
      <div className="more">
        <span className="four">+4</span>
      </div>
    ) : (
      <img src={item} alt="" />
    );
  };

  const deleteTask = async () => {
    if (
      window.localStorage.getItem("id") !==
      window.localStorage.getItem("taskUserID")
    ) {
      toast.error("This task is not for you", {
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
    await dispatch(DeleteTask(Number(window.localStorage.getItem("taskID"))));
    await dispatch(
      fetchTasks({
        error: (error) => {
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
    toast.success("The task was successfully deleted", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    const element = document.getElementById(
      window.localStorage.getItem("taskID")
    );
    const mul = Number(window.localStorage.getItem("taskID")) - 4;
    const coordinates = element.getBoundingClientRect();
    window.scrollTo(coordinates.left, coordinates.top + mul * 130);
    console.log(coordinates.top + mul * 130);
    console.log(coordinates.left);
    console.log(coordinates.bottom);
    console.log(coordinates.right);
  };

  const checked = () => {
    if (Number(window.localStorage.getItem("id")) !== task.userId) {
      toast.error("This task is not for you", {
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
    task = {
      ...task,
      done: !task.done,
    };
    dispatch(updateTask(task));
    setFinish(!finish);
    toast.success("The status change was successful", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    const element = document.getElementById(task.id);
    const mul = task.id - 4;
    const coordinates = element.getBoundingClientRect();
    window.scrollTo(coordinates.left, coordinates.top + mul * 130);
    console.log(coordinates.top + mul * 130);
    console.log(coordinates.left);
    console.log(coordinates.bottom);
    console.log(coordinates.right);
  };

  return (
    <div className={tasks + `${finish ? " end" : ""}`} id={task.id}>
      <section>
        <div className="row">
          <div className="col-7">
            <p>
              <span
                className={
                  Class + `${finish ? "text-decoration-line-through" : ""}`
                }
              >
                {task?.title}
              </span>
              <br />
              <span className="text-gray">{task?.description}</span>
            </p>
          </div>
          <div className="col-5">
            <div className="form-check">
              <BiTrash
                style={{
                  color: "red",
                  cursor: "pointer",
                  fontSize: "20px",
                  marginTop: "12px",
                  marginRight: "10px",
                  float: "right",
                }}
                data-bs-toggle="modal"
                data-bs-target="#delete"
                onClick={() => {
                  window.localStorage.setItem("taskUserID", task.userId);
                  window.localStorage.setItem("taskID", task.id);
                }}
                title="Delete Task"
              />
              <div onClick={checked} style={{ height: "40px" }}>
                {finish ? (
                  owner === task.id ? (
                    <input
                      className="form-check-input rounded-circle float-end me-4 mt-3"
                      style={{ transform: "scale(1.5)", cursor: "pointer" }}
                      type="checkbox"
                      onClick={checked}
                      checked
                    />
                  ) : (
                    <input
                      className="form-check-input rounded-circle float-end me-4 mt-3 dis"
                      style={{ transform: "scale(1.5)", cursor: "pointer" }}
                      type="checkbox"
                      checked
                      disabled
                    />
                  )
                ) : owner === task.id ? (
                  <input
                    className="form-check-input rounded-circle float-end me-4 mt-3"
                    style={{ transform: "scale(1.5)", cursor: "pointer" }}
                    type="checkbox"
                    onClick={checked}
                  />
                ) : (
                  <input
                    className="form-check-input rounded-circle float-end me-4 mt-3 dis"
                    style={{ transform: "scale(1.5)", cursor: "pointer" }}
                    type="checkbox"
                    disabled
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="date col-7">
            <Date date={task.date} />
          </div>
          <div className="people tdr col-5">
            {people?.map((item, index) => (
              <div
                className={dv + `${index + 1}`}
                key={Math.floor(Math.random() * 10000)}
              >
                {img(index, item)}
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="modal fade" id="delete">
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
              <p className="mb-3 h4">Are you sure you want to delete task?</p>
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
                onClick={deleteTask}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
