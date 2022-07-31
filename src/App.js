import CreateList from "./components/CreateList";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CreateList />
      <TodoList />
    </div>
  );
}

export default App;
