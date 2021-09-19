import { useState } from "react";

export default function TodoAdder(props) {
  const { todoList } = props;
  const [todoText, setTodoText] = useState("");

  const handleChange = (event) => {
    setTodoText(event.target.value);
  };

  const handleSubmit = (event) => {
    todoList.create(todoText);
    setTodoText("");
    event.preventDefault();
  };

  return (
    <form className="todoAdder" onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={todoText}></input>
    </form>
  );
}
