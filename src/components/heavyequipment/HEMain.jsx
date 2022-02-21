import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import {
  Button,
  AddCircleOutlineIcon,
  CheckCircleOutlineIcon,
  Stack,
} from "./index";

const HEMain = () => {
  const navigate = useNavigate();
  const newHE = (e) => {
    navigate("/heavy-equipment/new");
  };
  const viewComplete = (e) => {
    navigate("/heavy-equipment/completed");
  };
  return (
    <div>
      <h1>Heavy Equipment Checklists</h1>
      <Stack style={{ justifyContent: "center" }} direction="row" spacing={2}>
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
