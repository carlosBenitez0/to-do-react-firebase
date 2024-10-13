import { useEffect } from "react";
import { Task } from "./Task";
import { useTasks } from "../context/tasksProvider";
import { Loader } from "./Loader";

export const TaskList = () => {
  const { getAllTasks, taskList } = useTasks();

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <div
      className={`task-list flex flex-col gap-4 my-4 h-[310px] p-4 overflow-auto scrollbar-hide ${
        taskList.length === 0 ? "items-center justify-center" : ""
      }`}
    >
      {taskList.length === 0 ? (
        <Loader size={14} />
      ) : (
        taskList &&
        taskList.map((task) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              task={task.task}
              completed={task.completed}
            />
          );
        })
      )}
    </div>
  );
};
