import React from "react";

const CompletedLVChecklists = ({ LVChecklist }) => {
  return (
    <div>
      {LVChecklist !== [] && <ol>{LVChecklist.date}</ol>}
      {LVChecklist.oil === "Issue" && <li>Issue noted with oil level</li>}
      {LVChecklist.coolant === "Issue" && <li>Issue noted with coolant</li>}
    </div>
  );
};

export default CompletedLVChecklists;
