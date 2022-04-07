import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>;

const HEMain = () => {
  const navigate = useNavigate();
  const newHE = (e) => {
    navigate("/heavy-equipment/new");
  };
  const viewComplete = (e) => {
    navigate("/heavy-equipment/completed");
  };
  return (
    <>
      <Typography variant="h2" align="center">
        Heavy Equipment Checklists
      </Typography>
      <Stack style={{ justifyContent: "center" }} direction="row" spacing={2}>
        <Button
          onClick={newHE}
          variant="outlined"
          startIcon={<AddCircleOutlineIcon />}
          aria-label="new-heavy-equipment-checklist"
        >
          New Heavy Equipment Checklist
        </Button>

        <Button
          onClick={viewComplete}
          variant="outlined"
          startIcon={<CheckCircleOutlineIcon />}
          aria-label="view-completed-heavy-equipment-checklists"
        >
          View Completed Checklists
        </Button>
      </Stack>
      <Divider sx={{ m: 1 }} />
      <Outlet />
    </>
  );
};

export default HEMain;
