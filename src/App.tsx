import "./App.css";
import { Message } from "./components/Message";
import { Todo } from "./components/Todo";
import { TaskProvider } from "./context/tasksProvider";

const App = () => {
  return (
    <TaskProvider>
      <div className="flex font-poppins items-center justify-center min-h-screen w-full bg-[#e0e0e0]">
        <Todo />
      </div>
    </TaskProvider>
  );
};

export default App;
