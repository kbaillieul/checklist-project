import React from "react";
import { Link, Outlet } from "react-router-dom";
import Box from "@mui/material/Box";

const CompletedLVChecklists = ({ LVChecklist }) => {
  const LVDate = new Date(LVChecklist.date);
  const LVDateString = LVDate.toString();
  const key = LVChecklist.key;
  return (
    <div>
      <Link to={`/lightvehicle/completed/${key}`} key={key}>
        {LVChecklist !== [] && <ol>{LVDateString}</ol>}
      </Link>
      {LVChecklist.oil === "Issue" && <li>Issue noted with oil level</li>}
      {LVChecklist.coolant === "Issue" && <li>Issue noted with coolant</li>}
    </div>
  );
};

export default CompletedLVChecklists;
