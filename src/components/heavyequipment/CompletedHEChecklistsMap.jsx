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
  return (
    <>
      <Typography variant="h4" align="center">
        Completed Heavy Equipment Checklists
      </Typography>
      {completed.length === 0 ? (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="info">
            No Heavy Equipment Checklists have been completed yet.
          </Alert>
        </Stack>
      ) : (
        completed
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((HEChecklist) => (
            <CompletedHEChecklistAccordian HEChecklist={HEChecklist} />
          ))
      )}
    </>
  );
};
export default CompletedHEChecklistsMap;
