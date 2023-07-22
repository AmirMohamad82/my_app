import Task from "./Task";

const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={Math.floor(Math.random() * 10000)}
          task={task}
          onDelete={onDelete}
        />
      ))}
    </>
  );
};

export default Tasks;
