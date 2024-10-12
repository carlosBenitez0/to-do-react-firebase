import { MdOutlinePendingActions } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

interface props {
  id: number;
  task: string;
  completed: boolean;
  setCompleted: (id: number, task: string, completed: boolean) => void;
}

export const Task = ({ id, task, completed, setCompleted }: props) => {
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
