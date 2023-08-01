import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const Tasks = ({ tasks }) => {
  const allTasks = tasks;
  const openTasks = tasks.filter((task) => !task.done);
  const closedTasks = tasks.filter((task) => task.done);
  const filter = useSelector((state) => state.task.filter);
  const [state, setState] = useState(0);

  useEffect(() => {
    setState(filter);
  }, [filter]);

  return (
    <>
      {tasks.length ? (
        <>
          {state === 0 &&
            allTasks.map((task) => <Task key={task.id} task={task} />)}
          {state === 1 &&
            openTasks.map((task) => <Task key={task.id} task={task} />)}
          {state === 2 &&
            closedTasks.map((task) => <Task key={task.id} task={task} />)}
        </>
      ) : (
        <div className="text-danger text-center">No tasks to show!</div>
      )}
    </>
  );
};

export default Tasks;