import React from "react";
import "./button-important.css";

const ImportantButton = ({setIsEditing,isEditing}) => {

    const handleEdit = () => {

        setIsEditing(true);

    }



return <button type="button" onClick={handleEdit} className="btn btn-outline-success">Edit</button>

}

export default ImportantButton