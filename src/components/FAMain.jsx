import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Stack from "@mui/material/Stack";

const FAMain = () => {
  const navigate = useNavigate();
  const newFA = (e) => {
    navigate("/fallarrest/new");
  };
  const viewComplete = (e) => {
    navigate("/fallarrest/completed");
  };
  return (
    <div>
      <h1>Fall Arrest Checklists</h1>
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
