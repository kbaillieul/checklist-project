import React from "react";
import { useContext } from "react";
import {
  CompletedChecklistContext,
  CompletedLVChecklistAccordian,
} from "./index";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>;

const CompletedLVChecklistsMap = () => {
  const { lightVehicleComplete } = useContext(CompletedChecklistContext);
  let completed = lightVehicleComplete.value("lightVehicle");
  if (completed.length === 0) {
    return (
      <div>
        <Typography variant="h5" align="center">
          Completed Light Vehicle Checklists
        </Typography>
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="info">
            No Light Vehicle Checklists have been completed yet.
          </Alert>
        </Stack>
      </div>
    );
  } else {
    return (
      <div>
        <Typography variant="h5" align="center">
          Completed Light Vehicle Checklists
        </Typography>
        {completed.map((LVChecklist) => (
          <CompletedLVChecklistAccordian LVChecklist={LVChecklist} />
        ))}
        <hr />
      </div>
    );
  }
};

export default CompletedLVChecklistsMap;
