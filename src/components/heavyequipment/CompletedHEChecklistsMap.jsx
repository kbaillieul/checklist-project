import React from "react";
import { useContext } from "react";
import {
  CompletedChecklistContext,
  CompletedHEChecklistAccordian,
} from "./index";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>;

const CompletedHEChecklistsMap = () => {
  const { heavyEquipmentComplete } = useContext(CompletedChecklistContext);
  let completed = heavyEquipmentComplete.value();
  if (completed.length === 0) {
    return (
      <>
        <Typography variant="h5" align="center">
          Completed Heavy Equipment Checklists
        </Typography>
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="info">
            No Heavy Equipment Checklists have been completed yet.
          </Alert>
        </Stack>
      </>
    );
  } else {
    return (
      <>
        <Typography variant="h5" align="center">
          Completed Heavy Equipment Checklists
        </Typography>
        {completed
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((HEChecklist) => (
            <CompletedHEChecklistAccordian HEChecklist={HEChecklist} />
          ))}
        <hr />
      </>
    );
  }
};

export default CompletedHEChecklistsMap;
