import React from "react";

const CompletedHEChecklists = ({ HEChecklist }) => {
  return (
    <div>
      {HEChecklist !== [] && <ol>{HEChecklist.date}</ol>}
      {HEChecklist.alarm === "Issue" && <li>Issue noted with backup alarm</li>}
      {HEChecklist.hydraulics === "Issue" && (
        <li>Issue noted with hydraulics</li>
      )}
    </div>
  );
};

export default CompletedHEChecklists;
