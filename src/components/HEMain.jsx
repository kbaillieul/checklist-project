import React from "react";
import { useNavigate } from "react-router-dom";
import CompletedHEChecklistsMap from "./CompletedHEChecklistsMap";
import Navbar from "./Navbar";

const HEMain = ({ completedHE }) => {
  const navigate = useNavigate();
  const newHE = (e) => {
    navigate("/newheavyequipment");
  };
  return (
    <div>
      <Navbar />
      <h2>Heavy Equipment Checklist</h2>
      <button onClick={newHE}>Add New</button>
      <h2>Completed Checklists</h2>
      <CompletedHEChecklistsMap completedHE={completedHE} />
    </div>
  );
};

export default HEMain;
