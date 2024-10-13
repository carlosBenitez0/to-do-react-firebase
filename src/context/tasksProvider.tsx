import { createContext, ReactNode, useContext, useState } from "react";
import { getTasks, updateTask } from "../services/todoApi";

const TasksContext = createContext([]);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [taskList, setTaskList] = useState([]);
  const [showMessage, setShowMessage] = useState("");

  const getAllTasks = async () => {
    const tasks = await getTasks();
    setTaskList(tasks);
  };

  const setCompleted = (id: number, task: string, completed: boolean) => {
    updateTask(id, { task, completed });
    getAllTasks();
  };

  return (
    <TasksContext.Provider
      value={{
        taskList,
        getAllTasks,
        setCompleted,
        showMessage,
        setShowMessage,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (context === undefined) {
    throw new Error("TasksContext not working");
  }

  return context;
};
