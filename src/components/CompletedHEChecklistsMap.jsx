import React from "react";
import CompletedHEChecklists from "./CompletedHEChecklists";

const CompletedHEChecklistsMap = ({ completedHE }) => {
  return (
    <div>
      {completedHE.map((HEChecklist) => (
        <CompletedHEChecklists HEChecklist={HEChecklist} />
      ))}
    </div>
  );
};

export default CompletedHEChecklistsMap;
