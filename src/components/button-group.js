import React, { useState, useEffect } from "react";

const ButtonGroupTodo = ({ todoData, setTodoData }) => {
  const [filteredItems, setfilteredItems] = useState([]);

  const activeFilter = () => {
    const newItems = todoData.filter((item) => {
      if (item.success) {
        setfilteredItems((prev) => [...prev, item]);
      }
      return item.success === false;
    });
    //  console.log(filteredItems);
    setTodoData(newItems);
    console.log(filteredItems);
  };

  const allFilter = () => {
    const newItems = [...todoData, ...filteredItems];
    const uniqueNewItems = newItems.filter((item, index, self) =>
      index === self.findIndex((t) => (
          t.label === item.label && t.important === item.important && t.success === item.success && t.id === item.id
      ))
  );
    setTodoData(uniqueNewItems);
    setfilteredItems([]);
    //  setTodoDataOriginal(todoData);
    //  console.log(todoData);
  };

  const doneFilter = () => {
    const newItems = todoData.filter((item) => {
      if (item.success === false) {
        setfilteredItems((prev) => [...prev, item]);
      }
      return item.success === true;
    });
    setTodoData([...newItems, ...filteredItems]);
    console.log(todoData);
  };

  return (
    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" onClick={allFilter} class="btn btn-primary">
        All
      </button>
      <button type="button" onClick={activeFilter} class="btn btn-primary">
        Active
      </button>
      <button type="button" onClick={doneFilter} class="btn btn-primary">
        Done
      </button>
    </div>
  );
};

export default ButtonGroupTodo;
