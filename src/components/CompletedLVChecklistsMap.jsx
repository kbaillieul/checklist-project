import React from "react";
import CompletedLVChecklists from "./CompletedLVChecklists";
import { Outlet } from "react-router-dom";

const CompletedLVChecklistsMap = ({ completedLV }) => {
  return (
    <div>
      <h2>Completed Light Vehicle Checklists</h2>
      {completedLV.map((LVChecklist) => (
        <CompletedLVChecklists LVChecklist={LVChecklist} />
      ))}
      <hr />
      <Outlet />
    </div>
  );
};

export default CompletedLVChecklistsMap;
