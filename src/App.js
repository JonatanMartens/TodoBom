import "./App.css";
import ItemList from "./components/ItemList";
import TodoList from "./todolist/TodoList";

function App() {
  const todoList = new TodoList();
  todoList.create("test");
  todoList.create("aa");
  return <ItemList todoList={todoList} />;
}

export default App;
