import { useRef } from "react";
import { useTasks } from "../context/tasksProvider";
import { addTask } from "../services/todoApi";

export const TaskForm = () => {
  const { getAllTasks, setShowMessage } = useTasks();
  const inputRef = useRef<HTMLInputElement>(null);
  inputRef.current?.focus();

  const addNewTask = async (e) => {
    e.preventDefault();
    if (inputRef.current) {
      const task = inputRef?.current?.value;
      const result = await addTask(task);
      if (result == 1) {
        setShowMessage("add");
        setTimeout(() => {
          setShowMessage("");
        }, 5000);
      }
      getAllTasks();
      inputRef.current.value = "";
    }
  };

  return (
    <form className="form flex items-center rounded-lg" onSubmit={addNewTask}>
      <input
        ref={inputRef}
        type="text"
        className="p-2 w-full bg-transparent outline-none border-none pl-5 py-2 text-[#323232] "
        name="task_name"
        placeholder="Write a task"
      />
      <button type="submit" className="px-2 cursor-default">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6 add-shadow active:border active:border-green-300 text-[#797979]  rounded-full p-1 cursor-pointer hover:text-green-500 
          hover:bg-slate-100 hover:scale-110 transition-all duration-300 ease-in-out"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </form>
  );
};
