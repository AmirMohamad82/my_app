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
  const number = [totalTasks, openTasks, closedTasks];
  const states = ["All", "Open", "Closed", "Archived"];
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
      <div className="row text-decoration-none">
        {states.map((state, index) => (
          <button
            key={Math.floor(Math.random() * 100)}
            className={`btn btn-default px-2 mb-2 col ${
              index === stateIndex ? "text-primary" : "text-gray"
            }`}
            onClick={() => handleStateChange(index)}
          >
            {state}
            <span
              className={`px-2 text-white rounded-circle ${
                index === stateIndex ? "bg-primary" : "bg-gray"
              }`}
            >
              {index === 3 ? 0 : number[index]}
            </span>
            {index === 0 ? <span className="span"></span> : ""}
          </button>
        ))}
      </div>
      <div className="space"></div>
    </div>
  );
};

export default State;
