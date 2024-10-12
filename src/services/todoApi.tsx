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
  try {
    const docRef = await addDoc(collection(db, "tasks"), newTask);
    console.log("Documento escrito con ID: ", docRef.id);
  } catch (e) {
    console.error("Error al agregar documento: ", e);
  }
};

// Function to get all tasks
export const getTasks = async () => {
  const querySnapshot = await getDocs(collection(db, "tasks"));
  const tasks: string[] = [];
  querySnapshot.forEach((doc) => {
    tasks.push({ id: doc.id, ...doc.data() });
  });
  return tasks;
};

// Function to update an existing task
export const updateTask = async (id, updatedData) => {
  const taskRef = doc(db, "tasks", id);
  try {
    await updateDoc(taskRef, updatedData);
    console.log("Documento actualizado!");
  } catch (e) {
    console.error("Error al actualizar documento: ", e);
  }
};

// Function to delete an existing task
export const deleteTask = async (id) => {
  const taskRef = doc(db, "tasks", id);
  try {
    await deleteDoc(taskRef);
    console.log("Documento eliminado!");
  } catch (e) {
    console.error("Error al eliminar documento: ", e);
  }
};
