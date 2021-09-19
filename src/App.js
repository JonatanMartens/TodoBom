import "./App.css";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import TodoAdder from "./components/TodoAdder";
import TodoList from "./todolist/TodoList";

function App() {
  const todoList = new TodoList();
  todoList.create("test");
  todoList.create("aa");
  return (
    <div>
      <Header></Header>

      <ItemList todoList={todoList} />

      <TodoAdder todoList={todoList}></TodoAdder>
    </div>
  );
}

export default App;
