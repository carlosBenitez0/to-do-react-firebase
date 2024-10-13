import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { getTasks, updateTask } from "../services/todoApi";
import { Task } from "../types/taskTypes";

interface TasksContextType {
  taskList: Task[];
  getAllTasks: () => Promise<void>;
  setCompleted: (id: string, task: string, completed: boolean) => void;
  showAlert: string;
  setShowAlert: Dispatch<SetStateAction<string>>;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  taskId: string;
  setTaskId: Dispatch<SetStateAction<string>>;
  taskState: boolean | undefined;
  setTaskState: Dispatch<SetStateAction<boolean | undefined>>;
  loading: boolean;
}

export const TasksContext = createContext<TasksContextType | undefined>(
  undefined
);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [showAlert, setShowAlert] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [taskId, setTaskId] = useState<string>("");
  const [taskState, setTaskState] = useState<boolean | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [firstRender, setFirstRender] = useState<boolean>(true);

  const getAllTasks = async () => {
    if (firstRender) {
      setFirstRender(false);
      setLoading(true);
      const tasks = await getTasks();
      setTaskList(tasks);
      setLoading(false);
    } else {
      const tasks = await getTasks();
      setTaskList(tasks);
    }
  };

  const setCompleted = (id: string, task: string, completed: boolean) => {
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
        setInputValue,
        taskId,
        setTaskId,
        taskState,
        setTaskState,
        loading,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
