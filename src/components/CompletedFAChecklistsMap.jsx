import React from "react";
import CompletedFAChecklists from "./CompletedFAChecklists";
import { Outlet } from "react-router-dom";

const CompletedFAChecklistsMap = ({ completedFA }) => {
  return (
    <div>
      {completedFA.map((FAChecklist) => (
        <CompletedFAChecklists FAChecklist={FAChecklist} />
      ))}
      <Outlet />
    </div>
  );
};

export default CompletedFAChecklistsMap;
