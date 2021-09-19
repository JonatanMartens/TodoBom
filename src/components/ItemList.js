import "./ItemList.css";
import { useEffect, useState } from "react";
import Item from "./Item";

export default function ItemList(props) {
  const { todoList } = props;
  const [items, setItems] = useState([...todoList.todos]);

  useEffect(() => {
    const handleChange = function (todos) {
      setItems([...todos]);
    };

    todoList.subscribe(handleChange);
    return () => todoList.unsubscribe(setItems);
  }, [todoList]);

  const itemsAsComponents = items.map((item, index) => (
    <li key={index}>
      <Item text={item} onDelete={(itemText) => todoList.delete(itemText)} />
    </li>
  ));

  return (
    <div className="itemList">
      <ul>{itemsAsComponents}</ul>
    </div>
  );
}
