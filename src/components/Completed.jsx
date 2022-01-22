import React from "react";
import List from "./List";
import { useState } from "react";

const Completed = ({ completedFA, completedLV, completedHE }) => {
  console.log(completedLV);
  console.log(completedHE);
  return (
    <div>
      {completedFA.map((checklist) => (
        <List FAChecklist={checklist} />
      ))}
      {/* {completedLV.map((checklist) => (
        <List LVChecklist={checklist} />
      ))}
      {completedHE.map((checklist) => (
        <List HEChecklist={checklist} />
      ))} */}
    </div>
  );
};

export default Completed;
