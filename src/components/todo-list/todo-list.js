import React from "react";
import TodoListItem from "../todo-list-item/todo-list-item.js";
import "./todo-list.css";

const TodoList = ({ todoData, setTodoData }) => {
  return (
    <ul className="todo-list">
      {todoData.map((item) => (
        <TodoListItem
          key={item.id}
          {...item}
          todoData={todoData}
          id={item.id}
          setTodoData={setTodoData}
        />
      ))}
    </ul>
  );
};

export default TodoList;
