import { useContext } from "react";
import { TasksContext } from "../context/tasksProvider";

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (context === undefined) {
    throw new Error("TasksContext not working");
  }
  return context;
};
