import Task from "./Task";

const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks ? (
        tasks.map((task) => (
          <Task key={Math.floor(Math.random() * 10000)} task={task} />
        ))
      ) : (
        <div className="text-danger text-center">No tasks to show!</div>
      )}
    </>
  );
};

export default Tasks;
