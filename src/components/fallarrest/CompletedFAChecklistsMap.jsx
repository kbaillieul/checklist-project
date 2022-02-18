import React from "react";
import CompletedFAChecklistAccordian from "./CompletedFAChecklistAccordian";
import { useContext } from "react";
import { CompletedFAContext } from "../../Contexts/CompletedFAContext";

const CompletedFAChecklistsMap = () => {
  const { completedFA } = useContext(CompletedFAContext);
  return (
    <div>
      <CompletedFAContext.Consumer>
        <h2>Completed Fall Arrest Checklists</h2>
        {completedFA.map((FAChecklist) => (
          <CompletedFAChecklistAccordian FAChecklist={FAChecklist} />
        ))}
      </CompletedFAContext.Consumer>
      <hr />
    </div>
  );
};

export default CompletedFAChecklistsMap;
