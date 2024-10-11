import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";

export const Todo = () => {
  return (
    <div className="card h-[400px] w-[40%] p-4">
      <TaskForm />
      <TaskList />
    </div>
  );
};
