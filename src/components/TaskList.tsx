import { Task } from "./Task";

export const TaskList = () => {
  return (
    <div className="task-list flex flex-col gap-4 my-4 h-[310px] p-4 overflow-auto scrollbar-hide">
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  );
};
