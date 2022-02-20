import React from "react";
import CompletedHEChecklistAccordian from "./CompletedHEChecklistAccordian";
import { useContext } from "react";
import { CompletedChecklistContext } from "../../Contexts/CompletedChecklistContext";

const CompletedHEChecklistsMap = () => {
  const [completedHE] = useContext(CompletedChecklistContext);
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
