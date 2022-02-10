import React from "react";
import { Link } from "react-router-dom";

const CompletedHEChecklists = ({ HEChecklist }) => {
  const HEDate = new Date(HEChecklist.date);
  const HEDateString = HEDate.toString();
  const key = HEChecklist.key;
  return (
    <div>
      <Link to={`/heavyequipment/completed/${key}`} key={key}>
        {HEChecklist !== [] && <ol>{HEDateString}</ol>}
      </Link>
      {HEChecklist.alarm === "Issue" && <li>Issue noted with backup alarm</li>}
      {HEChecklist.hydraulics === "Issue" && (
        <li>Issue noted with hydraulics</li>
      )}
    </div>
  );
};

export default CompletedHEChecklists;
