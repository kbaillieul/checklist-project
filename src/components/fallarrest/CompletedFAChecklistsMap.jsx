import React from "react";
import CompletedFAChecklistAccordian from "./CompletedFAChecklistAccordian";

const CompletedFAChecklistsMap = ({ completedFA }) => {
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
