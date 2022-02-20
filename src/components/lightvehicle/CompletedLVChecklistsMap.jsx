import React from "react";
import CompletedLVChecklistAccordian from "./CompletedLVChecklistAccordian";
import { useContext } from "react";
import { CompletedChecklistContext } from "../../Contexts/CompletedChecklistContext";

const CompletedLVChecklistsMap = () => {
  const [completedLV] = useContext(CompletedChecklistContext);
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
