import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import CompletedFAChecklistsMap from "./CompletedFAChecklistsMap";

const FAMain = ({ completedFA }) => {
  const navigate = useNavigate();
  const newFA = (e) => {
    navigate("/fallarrest/new");
  };
  const viewComplete = (e) => {
    navigate("/fallarrest/completed");
  };
  return (
    <div>
      <h2>Fall Arrest Checklist</h2>
      <button onClick={newFA}>Add New Checklist</button>
      <button onClick={viewComplete}>View Completed Checklists</button>
      <hr />
      <Outlet />
      {/* <h2>Completed Checklists</h2>
      <CompletedFAChecklistsMap completedFA={completedFA} /> */}
    </div>
  );
};

export default FAMain;
