import React from "react";
import { useContext } from "react";
import {
  CompletedChecklistContext,
  CompletedFAChecklistAccordian,
} from "./index";

const CompletedFAChecklistsMap = () => {
  const { fallArrestComplete } = useContext(CompletedChecklistContext);
  console.log(fallArrestComplete);

  return (
    <div>
      <h2>Completed Fall Arrest Checklists</h2>
      {fallArrestComplete.value.map((FAChecklist) => (
        <CompletedFAChecklistAccordian FAChecklist={FAChecklist} />
      ))}
      <hr />
    </div>
  );
};

export default CompletedFAChecklistsMap;
