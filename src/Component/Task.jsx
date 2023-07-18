import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import i3 from "./../images/images (1).jpg";
import i4 from "./../images/images (2).jpg";
import i1 from "./../images/download.jpg";
import Date from "./Date";

const Task = ({ task, onDelete }) => {
  const [state, setState] = useState(false);
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

  const checked = () => {
    task.done = !task.done;
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
                onClick={() => onDelete(task.id)}
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
          <div className="date col-7"><Date date={task.date}/></div>
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
