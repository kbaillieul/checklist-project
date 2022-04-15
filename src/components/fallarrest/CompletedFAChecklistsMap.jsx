import React from "react";
import Typography from "@mui/material/Typography";
import AccordionList from "../AccordionList";
import { useContext, useState } from "react";
import { CompletedChecklistContext } from "./index";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

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
          .map((checklist) => (
            <AccordionList checklist={checklist}>
              <Typography>
                <h4> 2. Completed by: {checklist.employeeName}</h4>
                <h4> 3. Location: {checklist.location}</h4>
                <h4> 4. Harness ID Number: {checklist.idNumber}</h4>
                <h4> 5. Task: {checklist.task}</h4>

                <h4> 6. Webbing: {checklist.webbing}</h4>
                <h4> 7. D Rings: {checklist.dRing}</h4>
              </Typography>
            </AccordionList>
          ))
      )}
    </>
  );
};

export default CompletedFAChecklistsMap;
