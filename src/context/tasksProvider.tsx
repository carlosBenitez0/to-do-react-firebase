import { createContext, ReactNode, useContext, useRef, useState } from "react";
import { getTasks, updateTask } from "../services/todoApi";

const TasksContext = createContext([]);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [taskList, setTaskList] = useState([]);
  const [showAlert, setShowAlert] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [taskId, setTaskId] = useState("");
  const [taskState, setTaskState] = useState();

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
        showAlert,
        setShowAlert,
        inputValue,
        taskId,
        taskState,
        setInputValue,
        setTaskId,
        setTaskState,
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
