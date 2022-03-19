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
      <div>
        <Typography variant="h5" align="center">
          Completed Heavy Equipment Checklists
        </Typography>
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="info">
            No Heavy Equipment Checklists have been completed yet.
          </Alert>
        </Stack>
      </div>
    );
  } else {
    return (
      <div>
        <Typography variant="h5" align="center">
          Completed Heavy Equipment Checklists
        </Typography>
        {completed.map((HEChecklist) => (
          <CompletedHEChecklistAccordian HEChecklist={HEChecklist} />
        ))}
        <hr />
      </div>
    );
  }
};

export default CompletedHEChecklistsMap;
