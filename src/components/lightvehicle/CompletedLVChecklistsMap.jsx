import React from "react";
import { useContext } from "react";
import {
  CompletedChecklistContext,
  CompletedLVChecklistAccordian,
} from "./index";

const CompletedLVChecklistsMap = () => {
  const { lightVehicle } = useContext(CompletedChecklistContext);
  return (
    <div>
      <h2>Completed Light Vehicle Checklists</h2>
      {lightVehicle.map((LVChecklist) => (
        <CompletedLVChecklistAccordian LVChecklist={LVChecklist} />
      ))}
      <hr />
    </div>
  );
};

export default CompletedLVChecklistsMap;
