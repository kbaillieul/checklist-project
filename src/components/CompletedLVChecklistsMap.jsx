import React from "react";
import CompletedLVChecklists from "./CompletedLVChecklists";

const CompletedLVChecklistsMap = ({ completedLV }) => {
  return (
    <div>
      {completedLV.map((LVChecklist) => (
        <CompletedLVChecklists LVChecklist={LVChecklist} />
      ))}
    </div>
  );
};

export default CompletedLVChecklistsMap;
