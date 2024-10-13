import { orderBy, query, serverTimestamp } from "firebase/firestore";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
} from "./firebaseConfig";
import { db } from "./firebaseConfig";
import { Task, TaskInput } from "../types/taskTypes";

export const addTask = async (newTask: string): Promise<number> => {
  if (newTask.trim() === "") return 0;
  try {
    await addDoc(collection(db, "tasks"), {
      task: newTask,
      completed: false,
      timestamp: serverTimestamp(),
    });
    return 1;
  } catch (e) {
    console.error("Error al agregar documento: ", e);
    return 0;
  }
};

export const getTasks = async (): Promise<Task[]> => {
  const querySnapshot = await getDocs(
    query(collection(db, "tasks"), orderBy("timestamp", "asc"))
  );
  const tasks: Task[] = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    tasks.push({
      id: doc.id,
      task: data.task,
      completed: data.completed,
      timestamp: data.timestamp,
    } as Task);
  });
  return tasks;
};

export const updateTask = async (
  id: string,
  updatedData: TaskInput
): Promise<number> => {
  const taskRef = doc(db, "tasks", id);
  try {
    await updateDoc(taskRef, { ...updatedData });
    return 1;
  } catch (e) {
    console.error("Error al actualizar documento: ", e);
    return 0;
  }
};

export const deleteTask = async (id: string): Promise<number> => {
  const taskRef = doc(db, "tasks", id);
  try {
    await deleteDoc(taskRef);
    return 1;
  } catch (e) {
    console.error("Error al eliminar documento: ", e);
    return 0;
  }
};
