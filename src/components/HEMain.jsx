import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Stack from "@mui/material/Stack";

const HEMain = ({ completedHE }) => {
  const navigate = useNavigate();
  const newHE = (e) => {
    navigate("/heavyequipment/new");
  };
  const viewComplete = (e) => {
    navigate("/heavyequipment/completed");
  };
  return (
    <div>
      <h1>Heavy Equipment Checklists</h1>
      <Stack direction="row" spacing={2}>
        <Button
          onClick={newHE}
          variant="outlined"
          startIcon={<AddCircleOutlineIcon />}
        >
          New Heavy Equipment Checklist
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

export default HEMain;
