import React from "react";
import List from "./List";

const Completed = ({ completedChecklists }) => {
  return (
    <div>
      {completedChecklists.map((checklist) => (
        <List checklist={checklist.date} />
      ))}
    </div>
  );
};

export default Completed;
