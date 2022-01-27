import React from "react";

const CompletedHEChecklists = ({ HEChecklist }) => {
  const HEDate = new Date(HEChecklist.date);
  const HEDateString = HEDate.toString();
  return (
    <div>
      {HEChecklist !== [] && <ol>{HEDateString}</ol>}
      {HEChecklist.alarm === "Issue" && <li>Issue noted with backup alarm</li>}
      {HEChecklist.hydraulics === "Issue" && (
        <li>Issue noted with hydraulics</li>
      )}
    </div>
  );
};

export default CompletedHEChecklists;
