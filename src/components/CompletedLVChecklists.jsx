import React from "react";

const CompletedLVChecklists = ({ LVChecklist }) => {
  const LVDate = new Date(LVChecklist.date);
  const LVDateString = LVDate.toString();
  return (
    <div>
      {LVChecklist !== [] && <ol>{LVDateString}</ol>}
      {LVChecklist.oil === "Issue" && <li>Issue noted with oil level</li>}
      {LVChecklist.coolant === "Issue" && <li>Issue noted with coolant</li>}
    </div>
  );
};

export default CompletedLVChecklists;
