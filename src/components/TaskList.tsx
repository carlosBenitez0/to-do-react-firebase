import { useEffect } from "react";
import { Task } from "./Task";
import { useTasks } from "../context/tasksProvider";
import { Loader } from "./Loader";

export const TaskList = () => {
  const { getAllTasks, taskList, loading } = useTasks();

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <div
      className={`task-list rounded-task-list bg-card shadow-card flex flex-col gap-4 my-4 h-[310px] p-4 overflow-auto scrollbar-hide ${
        taskList.length === 0 ? "items-center justify-center" : ""
      }`}
    >
      {loading ? (
        <Loader />
      ) : taskList && taskList.length === 0 ? (
        <p>No pending tasks. Let's write a new task! :D</p>
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
