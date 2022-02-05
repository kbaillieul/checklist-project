import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import CompletedFAChecklistsMap from "./CompletedFAChecklistsMap";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Stack from "@mui/material/Stack";

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
      <h2>Fall Arrest Checklists</h2>
      <Stack direction="row" spacing={2}>
        <Button
          onClick={newFA}
          variant="outlined"
          startIcon={<AddCircleOutlineIcon />}
        >
          New Fall Arrest Checklist
        </Button>
        <br />
        <Button
          onClick={viewComplete}
          variant="outlined"
          startIcon={<CheckCircleOutlineIcon />}
        >
          View Completed Checklists
        </Button>
      </Stack>
      <br />
      <hr />
      <Outlet />
    </div>
  );
};

export default FAMain;
