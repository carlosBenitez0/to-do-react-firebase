import { useState } from "react";
import { MdOutlinePendingActions } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
export const Task = () => {
  const [taskCompleted, setTaskCompleted] = useState(false);

  return (
    <div
      className="task p-2 rounded-lg flex items-center justify-between cursor-pointer"
      onClick={() => setTaskCompleted(!taskCompleted)}
    >
      <p className={taskCompleted ? "line-through" : ""}>Task</p>
      {taskCompleted ? (
        <FaCheck className="text-xl" />
      ) : (
        <MdOutlinePendingActions className="text-xl" />
      )}
    </div>
  );
};
