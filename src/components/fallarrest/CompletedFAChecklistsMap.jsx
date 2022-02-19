import React from "react";
import CompletedFAChecklistAccordian from "./CompletedFAChecklistAccordian";
import { useContext, useState } from "react";
import { CompletedFAContext } from "../../Contexts/CompletedFAContext";

const CompletedFAChecklistsMap = () => {
  const [completedFA, setCompetedFA] = useContext(CompletedFAContext);
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
