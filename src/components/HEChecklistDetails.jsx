import React from "react";
import { useParams } from "react-router-dom";
import { getHEFromLocal } from "./local";

const HEChecklistDetails = () => {
  let params = useParams();
  let checklist = getHEFromLocal();
  let selectedChecklist = [];
  let HEDate;
  for (let i = 0; i < checklist.length; i++) {
    if (checklist[i].key === params.key) {
      selectedChecklist = checklist[i];
      HEDate = new Date(checklist[i].date);
    }
  }
  return (
    <div>
      <h4> 1. Date Completed: {HEDate.toString()}</h4>
      <h4> 2. Location: {selectedChecklist.location}</h4>
      <h4> 3. Task Description: {selectedChecklist.task}</h4>
      <h4> 4. Back-up Alarm: {selectedChecklist.alarm}</h4>
      <h4> 5. Hydraulics: {selectedChecklist.hydraulics}</h4>
    </div>
  );
};

export default HEChecklistDetails;
