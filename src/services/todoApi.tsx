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

// Function to add a new task

export const addTask = async (newTask: string) => {
  if (newTask.trim() === "") return;
  try {
    const docRef = await addDoc(collection(db, "tasks"), {
      task: newTask,
      timestamp: serverTimestamp(),
    });
    return 1;
  } catch (e) {
    console.error("Error al agregar documento: ", e);
    return 0;
  }
};

// Function to get all tasks
export const getTasks = async () => {
  const querySnapshot = await getDocs(
    query(collection(db, "tasks"), orderBy("timestamp", "asc"))
  );
  const tasks: string[] = [];
  querySnapshot.forEach((doc) => {
    tasks.push({ id: doc.id, ...doc.data() });
    // console.log(doc.id, " => ", doc.data());
  });

  return tasks;
};

// Function to update an existing task
export const updateTask = async (id, updatedData) => {
  const taskRef = doc(db, "tasks", id);
  try {
    await updateDoc(taskRef, updatedData);
    console.log("Documento actualizado!");
    return 1;
  } catch (e) {
    console.error("Error al actualizar documento: ", e);
    return 0;
  }
};

// Function to delete an existing task
export const deleteTask = async (id) => {
  const taskRef = doc(db, "tasks", id);
  try {
    await deleteDoc(taskRef);
    return 1;
  } catch (e) {
    console.error("Error al eliminar documento: ", e);
    return 0;
  }
};
