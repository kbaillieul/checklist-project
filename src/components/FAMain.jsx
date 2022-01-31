import React from "react";
import { useNavigate } from "react-router-dom";
import CompletedFAChecklists from "./CompletedFAChecklists";

const FAMain = () => {
  const navigate = useNavigate();
  const newFA = (e) => {
    navigate("/newfallarrest");
  };
  return (
    <div>
      <h2>Fall Arrest Checklist</h2>
      <button onClick={newFA}>Add New</button>
      <h2>Completed Checklists</h2>
    </div>
  );
};

export default FAMain;
