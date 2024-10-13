import { FormEvent, useEffect, useRef, useState } from "react";
import { useTasks } from "../context/tasksProvider";
import { addTask, updateTask } from "../services/todoApi";
import { IoMdClose } from "react-icons/io";

export const TaskForm = () => {
  const {
    getAllTasks,
    setShowAlert,
    inputValue,
    taskId,
    taskState,
    setInputValue,
    setTaskState,
    setTaskId,
  } = useTasks();

  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  inputRef.current?.focus();

  const addNewTask = async (e: FormEvent) => {
    e.preventDefault();

    // Limpiar alertas anteriores
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }

    if (inputValue.trim().length <= 0) {
      if (inputRef.current) {
        const task = inputRef?.current?.value;
        const result = await addTask(task);
        if (result === 1) {
          setShowAlert("add");
          const newTimeoutId = setTimeout(() => {
            setShowAlert("");
            setTimeoutId(null); // Limpiar el id
          }, 5000);
          setTimeoutId(newTimeoutId); // Guardar el nuevo id del timeout
        }
        getAllTasks();
        inputRef.current.value = "";
      }
    } else {
      if (inputRef.current) {
        const task = inputRef?.current?.value;
        const updatedData = {
          task,
          completed: taskState,
        };
        const result = await updateTask(taskId, updatedData);
        if (result === 1) {
          setInputValue("");
          setTaskState(undefined);
          setTaskId("");
          setShowAlert("edit");
          const newTimeoutId = setTimeout(() => {
            setShowAlert("");
            setTimeoutId(null); // Limpiar el id
          }, 5000);
          setTimeoutId(newTimeoutId); // Guardar el nuevo id del timeout
          getAllTasks();
        }
      }
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = inputValue;
    }
  }, [inputValue]);

  function cancelEdit() {
    setInputValue("");
    setTaskState(undefined);
    setTaskId("");
  }

  return (
    <form
      className="form rounded-card bg-card shadow-card flex items-center"
      onSubmit={addNewTask}
    >
      <input
        ref={inputRef}
        type="text"
        className="p-2 w-full bg-transparent outline-none border-none pl-5 py-2 text-[#323232] "
        name="task_name"
        placeholder="Write a task"
        autoComplete="off"
      />
      {inputValue.trim().length > 0 && (
        <IoMdClose
          className="size-6 add-shadow rounded-add-shadow bg-add-shadow shadow-add-shadow active:border active:border-red-300 text-[#797979]   p-1 cursor-pointer hover:text-red-500 
          hover:bg-red-100 hover:shadow-add-shadow-hover transition-all duration-300 ease-in-out"
          onClick={cancelEdit}
        />
      )}
      <button type="submit" className="px-2 cursor-default">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6 add-shadow rounded-add-shadow bg-add-shadow shadow-add-shadow active:border active:border-green-300 text-[#797979]  p-1 cursor-pointer hover:text-green-500 
          hover:bg-slate-100 hover:shadow-add-shadow-hover transition-all duration-300 ease-in-out"
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
