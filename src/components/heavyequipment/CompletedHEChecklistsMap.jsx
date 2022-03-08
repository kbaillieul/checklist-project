import React from "react";
import { useContext } from "react";
import {
  CompletedChecklistContext,
  CompletedHEChecklistAccordian,
} from "./index";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const CompletedHEChecklistsMap = () => {
  const { heavyEquipmentComplete } = useContext(CompletedChecklistContext);
  if (heavyEquipmentComplete.value.length === 0) {
    return (
      <div>
        <h2>Completed Heavy Equipment Checklists</h2>
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
        <h2>Completed Heavy Equipment Checklists</h2>
        {heavyEquipmentComplete.value.map((HEChecklist) => (
          <CompletedHEChecklistAccordian HEChecklist={HEChecklist} />
        ))}
        <hr />
      </div>
    );
  }
};

export default CompletedHEChecklistsMap;
