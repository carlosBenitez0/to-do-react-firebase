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
      className="task p-2 rounded-lg flex items-center justify-between cursor-pointer"
      onClick={() => {
        setCompleted(id, task, !completed);
      }}
    >
      <p className={completed ? "line-through" : ""}>{task}</p>
      {completed ? (
        <FaCheck className="text-xl" />
      ) : (
        <MdOutlinePendingActions className="text-xl" />
      )}
    </div>
  );
};
