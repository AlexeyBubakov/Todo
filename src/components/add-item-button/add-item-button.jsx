import React from "react";

const AddItemButton = ({setTodoData, setInputValue, inputValue}) => {


    const handleInputChange = (value) => {
        // setTodoData([...todoData, { label: "Buy cookies", important: false, id: todoData.length + 1 }]);
        setInputValue(value);


    };

    const handleAdd = () => {

        // setTodoData([...todoData,{label: inputValue, important: false, id: 1}]); // так не делать
        setTodoData(prevState => [...prevState, {label: inputValue, important: false, id: Math.random()}]); // правило хорошей разработки от Димы


    };


    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <button className="btn btn-outline-secondary" onClick={handleAdd} type="button">Add</button>
            </div>
            <input type="text" value={inputValue} onChange={(e) => handleInputChange(e.target.value)} className="form-control"
                   placeholder="Type task" aria-label="" aria-describedby="basic-addon1"/>
        </div>)

};

export default AddItemButton;
