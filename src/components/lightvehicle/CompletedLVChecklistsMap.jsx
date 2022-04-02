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

const CompletedLVChecklistsMap = () => {
  const { lightVehicleComplete } = useContext(CompletedChecklistContext);
  let completed = lightVehicleComplete.value();
  return (
    <>
      <Typography variant="h4" align="center">
        Completed Light Vehicle Checklists
      </Typography>
      {completed.length === 0 ? (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="info">
            No Light Vehicle Checklists have been completed yet.
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
                <h4> 4. Vehicle ID Number: {checklist.idNum}</h4>
                <h4> 5. Fuel Level: {checklist.fuel}</h4>
                <h4> 6. Oil Level: {checklist.oil}</h4>
                <h4> 7. Coolant Level: {checklist.coolant}</h4>
                <h4>
                  {" "}
                  8. Vehicle is in good working condition, clean, and ready for
                  use: {checklist.confirm}
                </h4>
              </Typography>
            </AccordionList>
          ))
      )}
    </>
  );
};

export default CompletedLVChecklistsMap;
