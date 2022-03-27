import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const CompletedLVChecklistAccordian = ({ LVChecklist }) => {
  const LVDate = new Date(LVChecklist.date);
  const LVDateString = LVDate.toString();
  let counter = 0;

  if (LVChecklist.oil === "Issue") {
    counter += 1;
  }
  if (LVChecklist.coolant === "Issue") {
    counter += 1;
  }
  if (LVChecklist.fuel === "Issue") {
    counter += 1;
  }
  if (LVChecklist.confirm === "Issue") {
    counter += 1;
  }

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="completed-light-vehicle-checklist"
          id="completed-light-vehicle-checklist"
        >
          <Typography sx={{ width: "70%", flexShrink: 0 }}>
            {LVDateString}
          </Typography>
          {counter === 0 ? <CheckCircleOutlineIcon /> : <ErrorOutlineIcon />}
          <Typography sx={{ color: "text.secondary" }}>
            {counter === 1
              ? `${counter} Issue Identified`
              : `${counter} Issues Identified`}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h4> 1. Date Completed: {LVDateString}</h4>
            <h4> 2. Employee Name: {LVChecklist.employeeName}</h4>
            <h4> 3. Location: {LVChecklist.location}</h4>
            <h4> 4. Vehicle ID Number: {LVChecklist.idNum}</h4>
            <h4> 5. Fuel Level: {LVChecklist.fuel}</h4>
            <h4> 6. Oil Level: {LVChecklist.oil}</h4>
            <h4> 7. Coolant Level: {LVChecklist.coolant}</h4>
            <h4>
              {" "}
              8. Vehicle is in good working condition, clean, and ready for use:{" "}
              {LVChecklist.confirm}
            </h4>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CompletedLVChecklistAccordian;
