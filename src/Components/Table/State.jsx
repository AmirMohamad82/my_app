import {
  selectOpenTasks,
  selectClosedTasks,
  selectTotalTasks,
  filter,
} from "../../Features/FeatureTask/TaskSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const State = () => {
  const dispatch = useDispatch();
  const openTasks = useSelector(selectOpenTasks);
  const closedTasks = useSelector(selectClosedTasks);
  const totalTasks = useSelector(selectTotalTasks);
  const [stateIndex, setStateIndex] = useState(
    Number(window.localStorage.getItem("state"))
  );

  const handleStateChange = (index) => {
    dispatch(filter(index));
    window.localStorage.setItem("state", index);
    setStateIndex(index);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <button
          className={`btn btn-default px-2 mb-2 col size ${
            stateIndex === 0 ? "text-primary" : "text-gray"
          }`}
          onClick={() => handleStateChange(0)}
        >
          All
          <span
            className={`px-2 text-white rounded-circle ${
              0 === stateIndex ? "bg-primary" : "bg-gray"
            }`}
          >
            {totalTasks}
          </span>
          <span className="span"></span>
        </button>
        <button
          className={`btn btn-default px-2 mb-2 col size ${
            stateIndex === 1 ? "text-primary" : "text-gray"
          }`}
          onClick={() => handleStateChange(1)}
        >
          Open
          <span
            className={`px-2 text-white rounded-circle ${
              1 === stateIndex ? "bg-primary" : "bg-gray"
            }`}
          >
            {openTasks}
          </span>
        </button>
        <button
          className={`btn btn-default px-2 mb-2 col size ${
            stateIndex === 2 ? "text-primary" : "text-gray"
          }`}
          onClick={() => handleStateChange(2)}
        >
          Closed
          <span
            className={`px-2 text-white rounded-circle ${
              2 === stateIndex ? "bg-primary" : "bg-gray"
            }`}
          >
            {closedTasks}
          </span>
        </button>
        <button
          className={`btn btn-default px-2 mb-2 col size ${
            stateIndex === 3 ? "text-primary" : "text-gray"
          }`}
          onClick={() => handleStateChange(3)}
        >
          Archived
          <span
            className={`px-2 text-white rounded-circle ${
              3 === stateIndex ? "bg-primary" : "bg-gray"
            }`}
          >
            0
          </span>
        </button>
      </div>
      <div className="space"></div>
    </div>
  );
};

export default State;
