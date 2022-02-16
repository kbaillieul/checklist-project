import React from "react";
import CompletedLVChecklistAccordian from "./CompletedLVChecklistAccordian";

const CompletedLVChecklistsMap = ({ completedLV }) => {
  return (
    <div>
      <h2>Completed Light Vehicle Checklists</h2>
      {completedLV.map((LVChecklist) => (
        <CompletedLVChecklistAccordian LVChecklist={LVChecklist} />
      ))}
      <hr />
    </div>
  );
};

export default CompletedLVChecklistsMap;
