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

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState(task.done);
  let dv = "dv";
  let Class = "text-dark ";
  let tasks = "task";
  const people = [`${i3}`, `${i1}`, `${i4}`];

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

  const deleteTask = () => {
    if (Number(window.localStorage.getItem("id")) !== task.userId) {
      alert("This task is not for you");
      return;
    }
    dispatch(DeleteTask(task));
    dispatch(fetchTasks());
  };

  const checked = () => {
    if (Number(window.localStorage.getItem("id")) !== task.userId) {
      alert("This task is not for you");
      return;
    }
    task = {
      ...task,
      done: !task.done,
    };
    dispatch(updateTask(task));
    setState(!state);
  };

  return (
    <div className={tasks + `${state ? " end" : ""}`}>
      <section>
        <div className="row">
          <div className="col-7">
            <p>
              <span
                className={
                  Class + `${state ? "text-decoration-line-through" : ""}`
                }
              >
                {task?.title}
              </span>
              <br />
              <span className="text-gray">{task?.description}</span>
            </p>
          </div>
          <div className="col-5">
            <div className="form-check ">
              <BiTrash
                style={{
                  color: "red",
                  cursor: "pointer",
                  fontSize: "20px",
                  marginTop: "12px",
                  marginRight: "10px",
                  float: "right",
                }}
                onClick={deleteTask}
              />
              {state ? (
                <input
                  className="form-check-input rounded-circle float-end me-4 mt-3"
                  style={{ transform: "scale(1.5)", cursor: "pointer" }}
                  type="checkbox"
                  onClick={checked}
                  checked
                />
              ) : (
                <input
                  className="form-check-input rounded-circle float-end me-4 mt-3"
                  style={{ transform: "scale(1.5)", cursor: "pointer" }}
                  type="checkbox"
                  onClick={checked}
                />
              )}
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
    </div>
  );
};

export default Task;
