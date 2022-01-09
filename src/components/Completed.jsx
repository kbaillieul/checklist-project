import React from "react";

const Completed = ({ completedChecklists }) => {
  return (
    <div>
      <h2>Completed Checklists</h2>
      <p>{completedChecklists}</p>
    </div>
  );
};

export default Completed;
