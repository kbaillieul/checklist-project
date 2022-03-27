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
      <Typography variant="h2" align="center">
        Light Vehicle Checklists
      </Typography>
      <Stack style={{ justifyContent: "center" }} direction="row" spacing={2}>
        <Button
          onClick={newLV}
          variant="outlined"
          startIcon={<AddCircleOutlineIcon />}
          aria-label="new-light-vehicle-checklist"
        >
          New Light Vehicle Checklist
        </Button>
        <br />
        <Button
          onClick={viewComplete}
          variant="outlined"
          startIcon={<CheckCircleOutlineIcon />}
          aria-label="view-completed-light-vehicle-checklist"
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
