import React from "react";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CompletedLVChecklists = ({ LVChecklist }) => {
  const LVDate = new Date(LVChecklist.date);
  const LVDateString = LVDate.toString();
  const key = LVChecklist.key;
  const [expanded, setExpanded] = React.useState(false);
  let counter = 0;

  if (LVChecklist.oil === "Issue") {
    counter += 1;
  }
  if (LVChecklist.coolant === "Issue") {
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
            {LVDateString}
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            {counter === 1
              ? `${counter} Issue Identified`
              : `${counter} Issues Identified`}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h4> 1. Date Completed: {LVDateString}</h4>
            <h4> 2. Vehicle ID Number: {LVChecklist.idNum}</h4>
            <h4> 3. Inspection Type: {LVChecklist.type}</h4>
            <h4> 4. Oil Level: {LVChecklist.oil}</h4>
            <h4> 5. Coolant Level: {LVChecklist.coolant}</h4>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CompletedLVChecklists;
