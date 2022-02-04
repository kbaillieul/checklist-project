import React from "react";
import { useParams } from "react-router-dom";
import { getFAFromLocal } from "./local";

const FAChecklistDetails = () => {
  let params = useParams();
  let checklist = getFAFromLocal();
  let selectedChecklist = [];
  for (let i = 0; i < checklist.length; i++) {
    if (checklist[i].key === params.key) {
      selectedChecklist = checklist[i];
    }
  }
  return (
    <div>
      <h2> Date Completed: {selectedChecklist.date}</h2>
      <h2> Completed by: {selectedChecklist.employeeName}</h2>
    </div>
  );
};

export default FAChecklistDetails;
