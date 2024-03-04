import React from "react";

const SearchTask = ({ setSearchQuery }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Task..."
        onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
      />
    </div>
  );
};

export default SearchTask;
