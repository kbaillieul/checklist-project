import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const CompletedHEChecklistAccordian = ({ HEChecklist }) => {
  const HEDate = new Date(HEChecklist.date);
  const HEDateString = HEDate.toString().substr(0, 15);
  let counter = 0;

  if (HEChecklist.alarm === "Issue") {
    counter += 1;
  }
  if (HEChecklist.hydraulics === "Issue") {
    counter += 1;
  }
  if (HEChecklist.fluid === "Issue") {
    counter += 1;
  }
  if (HEChecklist.hazard === "Issue") {
    counter += 1;
  }

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="completed-heavy-equipment-checklist"
          id="completed-heavy-equipment-checklist"
        >
          <Typography sx={{ width: "70%", flexShrink: 0 }}>
            {HEDateString}
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
            <h4> 1. Date Completed: {HEDateString}</h4>
            <h4> 2. Employee Name: {HEChecklist.employeeName}</h4>
            <h4> 3. Location: {HEChecklist.location}</h4>
            <h4> 4. Equipment ID Number: {HEChecklist.idNum}</h4>
            <h4> 5. Nearby Hazards: {HEChecklist.hazard}</h4>
            <h4> 6. Fluid Levels and Leaks: {HEChecklist.fluid}</h4>
            <h4> 7. Backup Alarm: {HEChecklist.alarm}</h4>
            <h4> 8. Hydraulics: {HEChecklist.hydraulics}</h4>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default CompletedHEChecklistAccordian;
