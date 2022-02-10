import React from "react";
import CompletedHEChecklists from "./CompletedHEChecklists";
import { Outlet } from "react-router-dom";

const CompletedHEChecklistsMap = ({ completedHE }) => {
  return (
    <div>
      <h2>Completed Heavy Equipment Checklists</h2>
      {completedHE.map((HEChecklist) => (
        <CompletedHEChecklists HEChecklist={HEChecklist} />
      ))}
      <hr />
      <Outlet />
    </div>
  );
};

export default CompletedHEChecklistsMap;
