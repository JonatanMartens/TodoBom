import "./App.css";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import TodoList from "./todolist/TodoList";

function App() {
  const todoList = new TodoList();
  todoList.create("test");
  todoList.create("aa");
  return (
    <div>
      <Header></Header>

      <ItemList todoList={todoList} />
    </div>
  );
}

export default App;
