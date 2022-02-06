import React from "react";
import { useParams } from "react-router-dom";
import { getLVFromLocal } from "./local";

const LVChecklistDetails = () => {
  let params = useParams();
  let checklist = getLVFromLocal();
  let selectedChecklist = [];
  let LVDate;
  for (let i = 0; i < checklist.length; i++) {
    if (checklist[i].key === params.key) {
      selectedChecklist = checklist[i];
      LVDate = new Date(checklist[i].date);
      console.log(checklist[i]);
    }
  }
  return (
    <div>
      <h4> 1. Date Completed: {LVDate.toString()}</h4>
      <h4> 2. Vehicle Number: {selectedChecklist.idNum}</h4>
      <h4> 3. Inspection Type: {selectedChecklist.type}</h4>
      <h4> 4. Oil Level: {selectedChecklist.oil}</h4>
      <h4> 5. Coolant Level: {selectedChecklist.coolant}</h4>
    </div>
  );
};

export default LVChecklistDetails;
