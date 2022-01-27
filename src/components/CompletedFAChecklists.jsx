import React from "react";

const CompletedFAChecklists = ({ FAChecklist }) => {
  const FADate = new Date(FAChecklist.date);
  const FADateString = FADate.toString();
  return (
    <div>
      {FAChecklist !== [] && <ol>{FADateString}</ol>}
      {FAChecklist.plan === false && <li>Issue noted with rescue plan</li>}
      {FAChecklist.alone === false && <li>Issue noted with working alone</li>}
      {FAChecklist.webbing === "Issue" && <li>Issue noted with webbing</li>}
      {FAChecklist.dRing === "Issue" && <li>Issue noted with D Rings</li>}
    </div>
  );
};

export default CompletedFAChecklists;
