import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const Tasks = () => {
  const tasks = useSelector((state) => state.task.tasks);
  const allTasks = tasks;
  const openTasks = tasks?.filter((task) => !task.done);
  const closedTasks = tasks?.filter((task) => task.done);
  const filter = useSelector((state) => state.task?.filter);
  const [Case, setCase] = useState(0);

  useEffect(() => {
    setCase(filter);
  }, [filter]);

  return (
    <>
      {tasks?.length ? (
        <>
          {Case === 0 &&
            allTasks.map((task) => <Task key={task.id} task={task} />)}
          {Case === 1 &&
            openTasks.map((task) => <Task key={task.id} task={task} />)}
          {Case === 2 &&
            closedTasks.map((task) => <Task key={task.id} task={task} />)}
        </>
      ) : (
        <div className="text-danger text-center h1">No tasks to show!</div>
      )}
    </>
  );
};

export default Tasks;
