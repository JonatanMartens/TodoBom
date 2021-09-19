import "./TodoAdder.css";
import { useState } from "react";

export default function TodoAdder(props) {
  const { todoList } = props;
  const [todoText, setTodoText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    setTodoText(event.target.value);
  };

  const handleSubmit = (event) => {
    try {
      todoList.create(todoText);
      setTodoText("");
    } catch (error) {
      setErrorMessage(error.message);
    }
    event.preventDefault();
  };

  return (
    <div className="todoAdder">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a new todo and press enter"
          onChange={handleChange}
          value={todoText}
        ></input>
      </form>

      <p hidden={errorMessage ? false : true} className="errorMessage">
        {errorMessage}
      </p>
    </div>
  );
}
