import React from "react";

const Header = ({ text, text1, onClick, setText1 }) => {
  return (
    <div className="header">
      <h2>{text}</h2>
      <input
        type="text"
        value={text1}
        placeholder="Enter task"
        onChange={(e) => setText1(e.target.value)}
      />
      <button className="add-task-button" onClick={onClick}>Add Task</button>
    </div>
  );
};

export default Header;
