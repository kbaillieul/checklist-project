import React from "react";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CompletedHEChecklists = ({ HEChecklist }) => {
  const HEDate = new Date(HEChecklist.date);
  const HEDateString = HEDate.toString();
  const key = HEChecklist.key;
  const [expanded, setExpanded] = React.useState(false);
  let counter = 0;

  if (HEChecklist.alarm === "Issue") {
    counter += 1;
  }
  if (HEChecklist.hydraulics === "Issue") {
    counter += 1;
  }

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "66%", flexShrink: 0 }}>
            {HEDateString}
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            {counter === 1
              ? `${counter} Issue Identified`
              : `${counter} Issues Identified`}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h4> 1. Date Completed: {HEDateString}</h4>
            <h4> 2. Location: {HEChecklist.location}</h4>
            <h4> 3. Task: {HEChecklist.task}</h4>
            <h4> 4. Backup Alarm: {HEChecklist.alarm}</h4>
            <h4> 5. Hydraulics: {HEChecklist.hydraulics}</h4>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CompletedHEChecklists;
