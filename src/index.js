import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

import SearchPanel from "./components/search-panel/search-panel.js";
import TodoList from "./components/todo-list/todo-list.js";
// import TodoListItem from "./components/todo-list-item.js";
import AppHeader from "./components/app-header/app-header.js";
import ButtonGroupTodo from "./components/button-group.js";
import AddItemButton from "./components/add-item-button/add-item-button.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  const [todoData, setTodoData] = useState([
    { label: "Drink Coffee", important: false, id: 1 },
    { label: "Make Awesome App", important: true, id: 2 },
    { label: "Have a lunch", important: false, id: 3 },
  ]);



  const [inputValue, setInputValue] = useState("");

  const style = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignContent: "space-around",
    margin: "30px",
  };

  return (
    <div style={style}>
      {/* <span> {new Date().toString()}</span> */}
      <AppHeader />
      <SearchPanel />
      <AddItemButton todoData={todoData} setTodoData= {setTodoData} inputValue={inputValue} setInputValue={setInputValue} />
      <ButtonGroupTodo />
      <TodoList todoData={todoData} setTodoData={setTodoData} />
    </div>
  );
};

root.render(<App />, document.getElementById("root"));
