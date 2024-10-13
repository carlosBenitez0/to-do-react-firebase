import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";

export const Todo = () => {
  return (
    <div className="card rounded-card bg-card shadow-card h-[400px] sm:w-[90%] md:w-[40%] p-4 transition-all duration-300 ease-linear hover:translate-y-[-5px] hover:shadow-card-hover mx-auto">
      <TaskForm />
      <TaskList />
    </div>
  );
};
