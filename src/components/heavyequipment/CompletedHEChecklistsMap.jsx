import React from "react";
import { useContext } from "react";
import AccordionList from "../AccordionList";
import { CompletedChecklistContext } from "./index";
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
          .map((checklist) => (
            <AccordionList checklist={checklist}>
              <Typography>
                <h4> 2. Employee Name: {checklist.employeeName}</h4>
                <h4> 3. Location: {checklist.location}</h4>
                <h4> 4. Equipment ID Number: {checklist.idNum}</h4>
                <h4> 5. Nearby Hazards: {checklist.hazard}</h4>
                <h4> 6. Fluid Levels and Leaks: {checklist.fluid}</h4>
                <h4> 7. Backup Alarm: {checklist.alarm}</h4>
                <h4> 8. Hydraulics: {checklist.hydraulics}</h4>
              </Typography>
            </AccordionList>
          ))
      )}
    </>
  );
};
export default CompletedHEChecklistsMap;
