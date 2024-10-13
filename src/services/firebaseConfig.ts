// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export {
  collection,
  doc,
  getDoc,
  setDoc,
  getDocs,
  query,
  updateDoc,
  deleteDoc,
  addDoc,
  where,
  onSnapshot,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_PROYECT_ID + ".firebaseapp.com",
  projectId: import.meta.env.VITE_PROYECT_ID,
  storageBucket: import.meta.env.VITE_PROYECT_ID + ".appspot.com",
};

// Inicializar Firebase
const firebaseApp = initializeApp(firebaseConfig);
// Inicializar Firestore
export const db = getFirestore(firebaseApp);
