import React from "react";

const Completed = ({ completedChecklists }) => {
  //   const complete = JSON.parse(completedChecklists);
  //   console.log(complete);
  return (
    <div>
      <h2>Completed Checklists</h2>
      <p>{completedChecklists}</p>
    </div>
  );
};

export default Completed;
