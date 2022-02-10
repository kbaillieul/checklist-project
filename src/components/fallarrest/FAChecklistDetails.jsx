import React from "react";
import { useParams } from "react-router-dom";
import { getFAFromLocal } from "../../database";

const FAChecklistDetails = () => {
  let params = useParams();
  let checklist = getFAFromLocal();
  let selectedChecklist = [];
  let FADate;
  for (let i = 0; i < checklist.length; i++) {
    if (checklist[i].key === params.key) {
      selectedChecklist = checklist[i];
      FADate = new Date(checklist[i].date);
    }
  }
  return (
    <div>
      <h4> 1. Date Completed: {FADate.toString()}</h4>
      <h4> 2. Completed by: {selectedChecklist.employeeName}</h4>
      <h4> 3. Location: {selectedChecklist.location}</h4>
      <h4> 4. Task: {selectedChecklist.task}</h4>
      <h4>
        {" "}
        5. There is an applicable and realistic rescue plan in place for this
        work: {selectedChecklist.plan === true ? "True" : "False"}
      </h4>
      <h4>
        {" "}
        6. I am not working alone. Working alone is never permitted in a
        scenario requiring fall arrest:{" "}
        {selectedChecklist.alone === true ? "True" : "False"}
      </h4>
      <h4> 7. Harness ID Number: {selectedChecklist.idNumber}</h4>
      <h4> 8. Webbing: {selectedChecklist.webbing}</h4>
      <h4> 9. D Rings: {selectedChecklist.dRing}</h4>
    </div>
  );
};

export default FAChecklistDetails;
