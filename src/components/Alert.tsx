import { useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { FiEdit3 } from "react-icons/fi";
import { FiTrash } from "react-icons/fi";
import { FaRegAddressBook } from "react-icons/fa6";
import { AlertStyle } from "../types/taskTypes";
import { useTasks } from "../hooks/useTasks";
import { motion } from "framer-motion";

export const Alert = () => {
  const { showAlert } = useTasks();
  const [icon, setIcon] = useState<JSX.Element | string>("");
  const [message, setAlert] = useState<string>("");
  const [style, setStyle] = useState<Partial<AlertStyle>>({
    backgroundColor: "",
    borderColor: "",
    color: "",
  });

  const getAlertContent = () => {
    switch (showAlert) {
      case "add":
        return {
          icon: <IoAdd />,
          message: "Task added!",
          style: {
            backgroundColor: "#d4edda",
            borderColor: "#c3e6cb",
            color: "#155724",
          },
        };

      case "delete":
        return {
          icon: <FiTrash />,
          message: "Task deleted!",
          style: {
            backgroundColor: "#f8d7da",
            borderColor: "#f5c6cb",
            color: "#721c24",
          },
        };
      case "edit":
        return {
          icon: <FiEdit3 />,
          message: "Task edited!",
          style: {
            backgroundColor: "#fff3cd",
            borderColor: "#ffeeba",
            color: "#856404",
          },
        };

      default:
        return { icon: "", message: "", style: {} };
    }
  };

  useEffect(() => {
    const { icon, message, style } = getAlertContent();
    setIcon(icon);
    setAlert(message);
    setStyle(style);
  }, [showAlert]);

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,

      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      className={` alert-shadow bg-card shadow-alert-shadow border-2 rounded-lg p-4 transition-all right-12 top-12 duration-300 ease-linear absolute opacity-100
      }`}
      style={{
        backgroundColor: style.backgroundColor,
        borderColor: style.borderColor,
        color: style.color,
      }}
    >
      {showAlert === "" ? (
        <div>
          <FaRegAddressBook className="text-2xl text-center text-gray-500" />
        </div>
      ) : (
        <>
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start space-y-2"
          >
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-start space-y-2"
            >
              {icon}
            </motion.div>
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-start space-y-2"
            >
              {message}
            </motion.div>
          </motion.div>
        </>
      )}
    </div>
  );
};
