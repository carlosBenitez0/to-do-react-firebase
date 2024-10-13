import { MdOutlinePendingActions } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { useTasks } from "../context/tasksProvider";
import { FiEdit3 } from "react-icons/fi";
import { FiTrash } from "react-icons/fi";
import { deleteTask } from "../services/todoApi";

interface props {
  id: number;
  task: string;
  completed: boolean;
}

export const Task = ({ id, task, completed }: props) => {
  const {
    setCompleted,
    setShowAlert,
    getAllTasks,
    setTaskId,
    setTaskState,
    setInputValue,
  } = useTasks();

  const deleteOneTask = async (id: number) => {
    const result = await deleteTask(id);
    if (result == 1) {
      setShowAlert("delete");
      getAllTasks();
      setTimeout(() => {
        setShowAlert("");
      }, 5000);
    }
  };

  const editTask = async (id: number, task: string, completed: boolean) => {
    await setInputValue(task);
    await setTaskId(id);
    await setTaskState(completed);
  };

  return (
    <div
      className={`task rounded-lg flex items-center justify-between ${
        completed ? "bg-[#bebebe]" : ""
      }`}
    >
      <p
        className={` p-2 w-full h-full cursor-pointer ${
          completed ? "line-through" : ""
        }`}
        onClick={() => {
          setCompleted(id, task, !completed);
        }}
      >
        {task}
      </p>
      <div className="min-w-xl flex gap-2 p-2 items-center ml-4">
        {completed ? (
          <>
            <FiEdit3 className="text-xl" />
            <FiTrash
              className="text-xl cursor-pointer"
              onClick={() => {
                deleteOneTask(id);
              }}
            />
            <FaCheck
              className="text-xl cursor-pointer"
              onClick={() => {
                setCompleted(id, task, !completed);
              }}
            />
          </>
        ) : (
          <>
            <FiEdit3
              className="text-xl cursor-pointer"
              onClick={() => {
                editTask(id, task, completed);
              }}
            />
            <FiTrash
              className="text-xl cursor-pointer"
              onClick={() => {
                deleteOneTask(id);
              }}
            />
            <MdOutlinePendingActions
              className="text-xl cursor-pointer"
              onClick={() => {
                setCompleted(id, task, !completed);
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};
