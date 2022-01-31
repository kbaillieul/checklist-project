import React from "react";
import CompletedFAChecklists from "./CompletedFAChecklists";

const CompletedFAChecklistsMap = ({ completedFA }) => {
  return (
    <div>
      {completedFA.map((FAChecklist) => (
        <CompletedFAChecklists FAChecklist={FAChecklist} />
      ))}
    </div>
  );
};

export default CompletedFAChecklistsMap;
