import { useEffect } from "react";
import { Task } from "./Task";

import { Loader } from "./Loader";
import { useTasks } from "../hooks/useTasks";
import { AnimatePresence, motion, Reorder } from "framer-motion";

export const TaskList = () => {
  const { getAllTasks, taskList, loading } = useTasks();

  useEffect(() => {
    getAllTasks();
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2, // Retraso progresivo para cada tarea usando el índice, index * 0.2 ==> 0, 0.2, 0.4, 0.6, etc.
        duration: 0.5,
      },
    }),
    exit: { opacity: 0, y: -20 },
  };

  return (
    <Reorder.Group
      axis="y"
      values={taskList}
      onReorder={getAllTasks}
      className={`task-list rounded-task-list bg-card shadow-card flex flex-col gap-4 my-4 h-[310px] p-4 overflow-auto scrollbar-hide ${
        taskList.length === 0 ? "items-center justify-center" : ""
      }`}
    >
      {loading ? (
        <Loader />
      ) : taskList && taskList.length === 0 ? (
        <p>No pending tasks. Let's write a new task! :D</p>
      ) : (
        taskList &&
        taskList.map((task, index) => {
          return (
            <motion.div
              key={task.id}
              custom={index} // Pasamos el índice como valor custom
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layoutId={task.id}
            >
              <AnimatePresence>
                <Reorder.Item key={task.id} value={task}>
                  <Task
                    id={task.id}
                    task={task.task}
                    completed={task.completed}
                    delay={index}
                  />
                </Reorder.Item>
              </AnimatePresence>
            </motion.div>
          );
        })
      )}
    </Reorder.Group>
  );
};
