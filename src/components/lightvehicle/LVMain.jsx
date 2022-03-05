import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const LVMain = () => {
  const navigate = useNavigate();
  const newLV = (e) => {
    navigate("/light-vehicle/new");
  };
  const viewComplete = (e) => {
    navigate("/light-vehicle/completed");
  };
  return (
    <div>
      <h1>Light Vehicle Checklists</h1>
      <Stack style={{ justifyContent: "center" }} direction="row" spacing={2}>
        <Button
          onClick={newLV}
          variant="outlined"
          startIcon={<AddCircleOutlineIcon />}
        >
          New Light Vehicle Checklist
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

export default LVMain;
