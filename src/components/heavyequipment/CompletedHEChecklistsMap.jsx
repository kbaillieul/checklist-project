import React from "react";
import CompletedHEChecklistAccordian from "./CompletedHEChecklistAccordian";

const CompletedHEChecklistsMap = ({ completedHE }) => {
  return (
    <div>
      <h2>Completed Heavy Equipment Checklists</h2>
      {completedHE.map((HEChecklist) => (
        <CompletedHEChecklistAccordian HEChecklist={HEChecklist} />
      ))}
      <hr />
    </div>
  );
};

export default CompletedHEChecklistsMap;
