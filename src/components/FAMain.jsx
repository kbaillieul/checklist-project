import React from "react";
import { useNavigate } from "react-router-dom";
import CompletedFAChecklistsMap from "./CompletedFAChecklistsMap";

const FAMain = ({ completedFA }) => {
  const navigate = useNavigate();
  const newFA = (e) => {
    navigate("/newfallarrest");
  };
  return (
    <div>
      <h2>Fall Arrest Checklist</h2>
      <button onClick={newFA}>Add New</button>
      <h2>Completed Checklists</h2>
      <CompletedFAChecklistsMap completedFA={completedFA} />
    </div>
  );
};

export default FAMain;
