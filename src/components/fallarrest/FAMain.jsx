import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import {
  Button,
  AddCircleOutlineIcon,
  CheckCircleOutlineIcon,
  Stack,
} from "./index";

const FAMain = () => {
  const navigate = useNavigate();
  const newFA = (e) => {
    navigate("/fall-arrest/new");
  };
  const viewComplete = (e) => {
    navigate("/fall-arrest/completed");
  };
  return (
    <div>
      <h1>Fall Arrest Checklists</h1>

      <Stack style={{ justifyContent: "center" }} direction="row" spacing={2}>
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
        <div />
      </Stack>
      <br />
      <hr />
      <Outlet />
    </div>
  );
};

export default FAMain;
