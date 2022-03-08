import React from "react";
import { useContext } from "react";
import {
  CompletedChecklistContext,
  CompletedLVChecklistAccordian,
} from "./index";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const CompletedLVChecklistsMap = () => {
  const { lightVehicleComplete } = useContext(CompletedChecklistContext);
  if (lightVehicleComplete.value.length === 0) {
    return (
      <div>
        <h2>Completed Light Vehicle Checklists</h2>
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
        <h2>Completed Light Vehicle Checklists</h2>
        {lightVehicleComplete.value.map((LVChecklist) => (
          <CompletedLVChecklistAccordian LVChecklist={LVChecklist} />
        ))}
        <hr />
      </div>
    );
  }
};

export default CompletedLVChecklistsMap;
