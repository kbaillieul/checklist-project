import React from "react";
import CompletedFAChecklistAccordian from "./CompletedFAChecklistAccordian";
import { useContext } from "react";
import { CompletedChecklistContext } from "../../Contexts/CompletedChecklistContext";

const CompletedFAChecklistsMap = () => {
  const [completedFA] = useContext(CompletedChecklistContext);
  return (
    <div>
      <h2>Completed Fall Arrest Checklists</h2>
      {completedFA.map((FAChecklist) => (
        <CompletedFAChecklistAccordian FAChecklist={FAChecklist} />
      ))}
      <hr />
    </div>
  );
};

export default CompletedFAChecklistsMap;
