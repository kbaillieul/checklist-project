import React from "react";
import { useContext } from "react";
import {
  CompletedChecklistContext,
  CompletedFAChecklistAccordian,
} from "./index";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>;

const CompletedFAChecklistsMap = () => {
  const { fallArrestComplete } = useContext(CompletedChecklistContext);
  let completed = fallArrestComplete.value();
  return (
    <>
      <Typography variant="h4" align="center">
        Completed Fall Arrest Checklists
      </Typography>
      {completed.length === 0 ? (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="info">
            No Fall Arrest Checklists have been completed yet.
          </Alert>
        </Stack>
      ) : (
        completed
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((FAChecklist) => (
            <CompletedFAChecklistAccordian FAChecklist={FAChecklist} />
          ))
      )}
    </>
  );
};

export default CompletedFAChecklistsMap;
