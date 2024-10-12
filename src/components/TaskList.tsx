import { useEffect } from "react";
import { Task } from "./Task";
import { useTasks } from "../context/tasksProvider";

export const TaskList = () => {
  const { getAllTasks, taskList } = useTasks();

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <div className="task-list flex flex-col gap-4 my-4 h-[310px] p-4 overflow-auto scrollbar-hide">
      {taskList &&
        taskList.map((task) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              task={task.task}
              completed={task.completed}
            />
          );
        })}
    </div>
  );
};
