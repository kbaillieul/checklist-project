import React from "react";
import List from "./List";
import { useState } from "react";

const Completed = ({ completedChecklists }) => {
  console.log(completedChecklists);
  return (
    <div>
      {completedChecklists.map((checklist) => (
        <List checklist={checklist} />
      ))}
    </div>
  );
};

export default Completed;
