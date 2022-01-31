import React from "react";
import { useNavigate } from "react-router-dom";
import CompletedLVChecklistsMap from "./CompletedLVChecklistsMap";

const LVMain = ({ completedLV }) => {
  const navigate = useNavigate();
  const newLV = (e) => {
    navigate("/newlightvehicle");
  };
  return (
    <div>
      <h2>Light Vehicle Checklist</h2>
      <button onClick={newLV}>Add New</button>
      <h2>Completed Checklists</h2>
      <CompletedLVChecklistsMap completedLV={completedLV} />
    </div>
  );
};

export default LVMain;
