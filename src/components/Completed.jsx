import React from "react";
import List from "./List";
import { useState } from "react";

const Completed = ({ completedChecklists }) => {
  return (
    <div>
      {completedChecklists.map((checklist) => (
        <List checklist={checklist} />
      ))}
      {console.log(completedChecklists)}
    </div>
  );
};

export default Completed;
