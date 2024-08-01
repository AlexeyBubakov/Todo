import React from "react";
import "./search-panel.css"



const SearchPanel = () => {
  return (<div className="input-group mb-3">
    <input type="text" className="form-control" placeholder="type to search" aria-label="Username" aria-describedby="basic-addon1"/>
  </div>);
};

export default SearchPanel;
