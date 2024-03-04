import React from 'react';

const DeleteButton = ({ handleDelete }) => {
  return (
    <div>
      <button onClick={handleDelete}>Delete Task</button>
    </div>
  );
};

export default DeleteButton;
