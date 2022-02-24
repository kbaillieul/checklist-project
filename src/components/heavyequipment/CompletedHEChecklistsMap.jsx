import React from "react";
import { useContext } from "react";
import {
  CompletedChecklistContext,
  CompletedHEChecklistAccordian,
} from "./index";

const CompletedHEChecklistsMap = () => {
  const { heavyEquipment } = useContext(CompletedChecklistContext);
  return (
    <div>
      <h2>Completed Heavy Equipment Checklists</h2>
      {heavyEquipment.map((HEChecklist) => (
        <CompletedHEChecklistAccordian HEChecklist={HEChecklist} />
      ))}
      <hr />
    </div>
  );
};

export default CompletedHEChecklistsMap;
