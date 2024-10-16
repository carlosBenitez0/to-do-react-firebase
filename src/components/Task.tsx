import { MdOutlinePendingActions } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

import { FiEdit3, FiTrash } from "react-icons/fi";
import { deleteTask } from "../services/todoApi";
import { useTasks } from "../hooks/useTasks";
import { motion } from "framer-motion";

interface Props {
  id: string; // Cambiado a 'string' ya que los IDs de Firebase suelen ser cadenas
  task: string;
  completed: boolean;
  delay: number;
}

export const Task = ({ id, task, completed, delay }: Props) => {
  const {
    setCompleted,
    setShowAlert,
    getAllTasks,
    setTaskId,
    setTaskState,
    setInputValue,
  } = useTasks();

  // Función para eliminar una tarea
  const deleteOneTask = async (id: string) => {
    const result = await deleteTask(id);
    if (result === 1) {
      setShowAlert("delete");
      getAllTasks();
      setTimeout(() => {
        setShowAlert("");
      }, 5000);
    }
  };

  // Función para editar una tarea
  const editTask = async (id: string, task: string, completed: boolean) => {
    setInputValue(task);
    setTaskId(id);
    setTaskState(completed);
  };

  const variants = {
    hidden: {
      opacity: 0,
      x: 20,
    },
    vivible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: delay * 0.2,
        duration: 0.5,
      },
    },
  };

  const variantsIcons = {
    hidden: {
      opacity: 0,
      x: 20,
    },
    vivible: (iconDelay: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: delay * 0.2 + iconDelay,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.div
      className={`task shadow-task transition-all duration-300 ease-linear text-task hover:shadow-task-hover hover:text-task-hover rounded-lg flex items-center justify-between ${
        completed ? "bg-[#bebebe]" : ""
      }`}
    >
      <p
        className={`p-2 w-full h-full cursor-pointer ${
          completed ? "line-through" : ""
        }`}
        onClick={() => setCompleted(id, task, !completed)}
      >
        {task}
      </p>

      {completed ? (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="vivible"
          className="min-w-xl flex gap-2 p-2 items-center ml-4"
        >
          <motion.div
            variants={variantsIcons}
            custom={0.1}
            initial="hidden"
            animate="vivible"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.2 }}
          >
            <FiEdit3 className="text-xl " />
          </motion.div>
          <motion.div
            variants={variantsIcons}
            custom={0.3}
            initial="hidden"
            animate="vivible"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.2 }}
          >
            <FiTrash
              className="text-xl cursor-pointer"
              onClick={() => deleteOneTask(id)}
            />
          </motion.div>
          <motion.div
            variants={variantsIcons}
            custom={0.5}
            initial="hidden"
            animate="vivible"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.2 }}
          >
            <FaCheck
              className="text-xl cursor-pointer"
              onClick={() => setCompleted(id, task, !completed)}
            />
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="vivible"
          className="min-w-xl flex gap-2 p-2 items-center ml-4"
        >
          <motion.div
            variants={variantsIcons}
            custom={0.1}
            initial="hidden"
            animate="vivible"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.2 }}
          >
            <FiEdit3
              className="text-xl cursor-pointer"
              onClick={() => editTask(id, task, completed)}
            />
          </motion.div>
          <motion.div
            variants={variantsIcons}
            custom={0.3}
            initial="hidden"
            animate="vivible"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.2 }}
          >
            <FiTrash
              className="text-xl cursor-pointer"
              onClick={() => deleteOneTask(id)}
            />
          </motion.div>
          <motion.div
            variants={variantsIcons}
            custom={0.5}
            initial="hidden"
            animate="vivible"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.2 }}
          >
            <MdOutlinePendingActions
              className="text-xl cursor-pointer"
              onClick={() => setCompleted(id, task, !completed)}
            />
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};
