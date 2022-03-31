import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Typography from "@mui/material/Typography";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>;

const FAMain = () => {
  const navigate = useNavigate();
  const newFA = (e) => {
    navigate("/fall-arrest/new");
  };
  const viewComplete = (e) => {
    navigate("/fall-arrest/completed");
  };
  return (
    <>
      <Typography variant="h2" align="center">
        Fall Arrest Checklists
      </Typography>

      <Stack style={{ justifyContent: "center" }} direction="row" spacing={2}>
        <Button
          onClick={newFA}
          variant="outlined"
          startIcon={<AddCircleOutlineIcon />}
          aria-label="create-new-fall-arrest-checklist"
        >
          New Fall Arrest Checklist
        </Button>
        <br />
        <Button
          onClick={viewComplete}
          variant="outlined"
          startIcon={<CheckCircleOutlineIcon />}
          aria-label="view-completed-fall-arrest-checklists"
        >
          View Completed Checklists
        </Button>
        <div />
      </Stack>
      <br />
      <hr />
      <Outlet />
    </>
  );
};

export default FAMain;
