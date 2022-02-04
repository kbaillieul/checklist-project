import React from "react";
import { Link, Outlet } from "react-router-dom";

const CompletedFAChecklists = ({ FAChecklist }) => {
  const FADate = new Date(FAChecklist.date);
  const FADateString = FADate.toString();
  const key = FAChecklist.key;
  return (
    <div>
      <Link to={`/fallarrest/completed/${key}`} key={key}>
        {FAChecklist !== [] && <ol>{FADateString}</ol>}
      </Link>
      {FAChecklist !== [] && <ol>{FADateString}</ol>}
      {FAChecklist.plan === false && <li>Issue noted with rescue plan</li>}
      {FAChecklist.alone === false && <li>Issue noted with working alone</li>}
      {FAChecklist.webbing === "Issue" && <li>Issue noted with webbing</li>}
      {FAChecklist.dRing === "Issue" && <li>Issue noted with D Rings</li>}
    </div>
  );
};

export default CompletedFAChecklists;
