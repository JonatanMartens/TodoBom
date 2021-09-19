import { useState } from "react";
import Item from "./Item";

export default function ItemList(props) {
  const { todoList } = props;
  const [, setItems] = useState(todoList.todos);

  const deleteItem = (itemText) => {
    todoList.delete(itemText);
    setItems(todoList.todos);
  };

  const items = todoList.todos.map((itemText, index) => (
    <li key={index}>
      <Item text={itemText} onDelete={deleteItem} />
    </li>
  ));

  return (
    <div className="itemList">
      <ul>{items}</ul>
    </div>
  );
}
