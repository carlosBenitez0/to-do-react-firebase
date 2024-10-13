import { useEffect, useState } from "react";
import { useTasks } from "../context/tasksProvider";
import { IoAdd } from "react-icons/io5";

import { FiTrash } from "react-icons/fi";

export const Alert = () => {
  const { showAlert } = useTasks();
  const [icon, setIcon] = useState();
  const [message, setAlert] = useState<string>("");
  const [style, setStyle] = useState<{
    backgroundColor: string;
    borderColor: string;
    color: string;
  }>({
    /* backgroundColor: "",
    borderColor: "",
    color: "", */
    backgroundColor: "#f8d7da",
    borderColor: "#f5c6cb",
    color: "#721c24",
  });

  const getAlertContent = () => {
    switch (showAlert) {
      case "add":
        return {
          icon: <IoAdd />,
          message: "Tarea agregada!",
          style: {
            backgroundColor: "#d4edda",
            borderColor: "#c3e6cb",
            color: "#155724",
          },
        };
      case "delete":
        return {
          icon: <FiTrash />,
          message: "Tarea eliminada!",
          style: {
            backgroundColor: "#f8d7da",
            borderColor: "#f5c6cb",
            color: "#721c24",
          },
        };
      case "":
        return {
          icon: <FiTrash />,
          message: "Tarea eliminada!",
          style: {
            backgroundColor: "#f8d7da",
            borderColor: "#f5c6cb",
            color: "#721c24",
          },
        };

      default:
        return { icon: "", message: "", style: {} };
    }
  };

  useEffect(() => {
    console.log(showAlert);
    const { icon, message, style } = getAlertContent();
    setIcon(icon);
    setAlert(message);
    setStyle(style);
  }, [showAlert]);

  return (
    <div
      className={` alert-shadow border-2 rounded-lg p-4 transition-all right-12 top-12 duration-300 ease-linear absolute opacity-100
      }`}
      style={{
        backgroundColor: style.backgroundColor,
        borderColor: style.borderColor,
        color: style.color,
      }}
    >
      {/* {showAlert === "" ? (
        <div>
          <FaRegAddressBook className="text-2xl text-center text-gray-500" />
        </div>
      ) : (
        <>
          <div className="text-2xl text-left">{icon}</div>
          <div className="">{message}</div>
        </>
      )} */}

      <div className="text-2xl text-left">{icon}</div>
      <div className="">{message}</div>
    </div>
  );
};
