import React, {useState} from "react";
import "./todo-list-item.css";
import ImportantButton from "../button-important/button-important.js";

const TodoListItem = ({ label, important = false, success, id, todoData, setTodoData}) => {


  const styleImportant = {
    color: important ? "tomato" : "black",
    paddingTop: "5px",
    textDecoration : success ? "line-through" : "none",
  };

  

  const [isEditing, setIsEditing] = useState(false);
  const [currentLabel, setCurrentLabel] = useState(label);


  const handleDelete = () => {
    const newItems = todoData.filter(item => item.id !== id);
    setTodoData(newItems);
  };

    const handleChange = (event) => {
        setCurrentLabel(event.target.value);
    };

    const handleSave = () => {
        setIsEditing(false);
        const updatedItems = todoData.map(item =>
          item.id === id ? { ...item, label: currentLabel } : item
        );
        setTodoData(updatedItems);
        
    }

    const handleSuccess = () => {
        //  const index = todoData.findIndex(item=> item.id === id);
        //  todoData[index].success = true;
        //  console.log(todoData[index]);
       const updateItems = todoData.map(item => item.id === id ? {...item, success: !item.success} : item);
        setTodoData(updateItems);
      }
  
  return (

    <li className="list-group-item list-group-item-spacebetween">
        { isEditing ? <input type="text" value={currentLabel} onChange={handleChange} onBlur={handleSave}/> :<span className="todo-list-item" style={styleImportant}>
        {label}</span>}
      <span>
          <button type="button" onClick={handleSuccess} className="btn btn-outline-secondary btn-sm">✔️</button>

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
