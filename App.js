import React, { useState } from "react";
import Header from "./components/Header";
import DeleteButton from "./components/DeleteButton";
import SearchTask from "./components/SearchTask";
import "./App.css"; 
const App = () => {
  const [text1, setText1] = useState("");
  const [list, setList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const onClick = () => {
    setList([...list, text1]);
    setText1("");
  };

  const handleDelete = (index) => {
    setList(list.filter((item,i) => i !== index));
  };

  return (
    <div className="container">
      <Header
        text=" Your Task List"
        text1={text1}
        onClick={onClick}
        setText1={setText1}
      />
      <SearchTask setSearchQuery={setSearchQuery} />
      <ul className="task-list">
        {list
          .filter((task) =>
            task.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((item, index) => (
            <li key={index} className="task-item">
              {item}
              <DeleteButton handleDelete={() => handleDelete(index)} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default App;
