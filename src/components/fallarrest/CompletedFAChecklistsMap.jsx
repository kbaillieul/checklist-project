import React from "react";
import { useContext } from "react";
import {
  CompletedChecklistContext,
  CompletedFAChecklistAccordian,
} from "./index";

const CompletedFAChecklistsMap = () => {
  const { fallArrest } = useContext(CompletedChecklistContext);

  return (
    <div>
      <h2>Completed Fall Arrest Checklists</h2>
      {fallArrest.map((FAChecklist) => (
        <CompletedFAChecklistAccordian FAChecklist={FAChecklist} />
      ))}
      <hr />
    </div>
  );
};

export default CompletedFAChecklistsMap;
