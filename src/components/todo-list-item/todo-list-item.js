import React, {useState} from "react";
import "./todo-list-item.css";
import ImportantButton from "../button-important/button-important.js";

const TodoListItem = ({ label, important = false, id, todoData, setTodoData}) => {
  
  const style = {
    color: important ? "tomato" : "black",
    paddingTop: "5px",
  };

  const [isEditing, setIsEditing] = useState(false);


  const handleDelete = () => {
    const newItems = todoData.filter(item => item.id !== id);
    setTodoData(newItems);
  };

    const handleChange = (event) => {
        label(event.target.value);
    };

    const handleSave = () => {
        setIsEditing(false);
    }
  
  return (

    <li className="list-group-item list-group-item-spacebetween">
        { isEditing ? <input type="text" value={label} onChange={handleChange} onBlur={handleSave}/> :<span className="todo-list-item" style={style}>
        {label}</span>}
      <span>
      <button
        onClick={handleDelete}
        type="button"
        className="btn btn-outline-danger"
      >
        DELETE
      </button>
        <ImportantButton isEditing={isEditing} setIsEditing={setIsEditing}/>
      </span>
    </li>
  );
};

export default TodoListItem;
