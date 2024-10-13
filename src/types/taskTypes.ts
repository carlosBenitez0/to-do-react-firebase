import { Timestamp } from "firebase/firestore";

export interface Task {
  id: string;
  task: string;
  completed: boolean;
  timestamp: Timestamp;
}

export interface TaskInput {
  task: string;
  completed?: boolean;
}

export interface AlertStyle {
  backgroundColor: string;
  borderColor: string;
  color: string;
}

export interface AlertContent {
  icon: JSX.Element | string;
  message: string;
  style: Partial<AlertStyle>;
}
