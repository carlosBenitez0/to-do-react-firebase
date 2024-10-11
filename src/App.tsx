import "./App.css";
import { Todo } from "./components/Todo";

const App = () => {
  return (
    <div className="flex font-poppins items-center justify-center min-h-screen w-full bg-[#e0e0e0]">
      <Todo />
    </div>
  );
};

export default App;
