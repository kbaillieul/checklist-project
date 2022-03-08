import React from "react";
import { useContext } from "react";
import {
  CompletedChecklistContext,
  CompletedFAChecklistAccordian,
} from "./index";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const CompletedFAChecklistsMap = () => {
  const { fallArrestComplete } = useContext(CompletedChecklistContext);
  // let FAEmpty = fallArrestComplete.value;
  if (fallArrestComplete.value.length === 0) {
    return (
      <div>
        <h2>Completed Fall Arrest Checklists</h2>
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="info">
            No Fall Arrest Checklists have been completed yet.
          </Alert>
        </Stack>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Completed Fall Arrest Checklists</h2>
        {fallArrestComplete.value.map((FAChecklist) => (
          <CompletedFAChecklistAccordian FAChecklist={FAChecklist} />
        ))}
        <hr />
      </div>
    );
  }
};

export default CompletedFAChecklistsMap;
