import "./App.css";
import { Alert } from "./components/Alert";
import { Todo } from "./components/Todo";
import { TaskProvider } from "./context/tasksProvider";

const App = () => {
  return (
    <TaskProvider>
      <div className="flex font-poppins items-center justify-center min-h-screen w-full bg-[#e0e0e0]">
        <Alert />
        <Todo />
      </div>
    </TaskProvider>
  );
};

export default App;
