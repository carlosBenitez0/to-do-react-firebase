import { MdOutlinePendingActions } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { useTasks } from "../context/tasksProvider";

interface props {
  id: number;
  task: string;
  completed: boolean;
}

export const Task = ({ id, task, completed }: props) => {
  const { setCompleted } = useTasks();

  return (
    <div
      className={`task p-2 rounded-lg flex items-center justify-between cursor-pointer ${
        completed ? "bg-gray-400" : ""
      }`}
      onClick={() => {
        setCompleted(id, task, !completed);
      }}
    >
      <p className={completed ? "line-through" : ""}>{task}</p>
      <div className="min-w-xl">
        {completed ? (
          <FaCheck className="text-xl" />
        ) : (
          <MdOutlinePendingActions className="text-xl" />
        )}
      </div>
    </div>
  );
};
