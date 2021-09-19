export default function Item(props) {
  return (
    <div className="item">
      <input type="checkbox" className="checkItem"></input>

      <div className="itemText">{props.text}</div>

      <button
        className="deleteItemButton"
        onClick={() => props.onDelete(props.text)}
      >
        X
      </button>
    </div>
  );
}
