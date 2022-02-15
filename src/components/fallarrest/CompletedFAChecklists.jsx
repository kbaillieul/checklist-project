import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CompletedFAChecklists = ({ FAChecklist }) => {
  const FADate = new Date(FAChecklist.date);
  const FADateString = FADate.toString();
  const key = FAChecklist.key;
  const [expanded, setExpanded] = React.useState(false);
  let counter = 0;

  if (FAChecklist.alone === false) {
    counter += 1;
  }
  if (FAChecklist.plan === false) {
    counter += 1;
  }
  if (FAChecklist.dRing === "Issue") {
    counter += 1;
  }
  if (FAChecklist.webbing === "Issue") {
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
            {FADateString}
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            {counter === 1
              ? `${counter} Issue Identified`
              : `${counter} Issues Identified`}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h4> 1. Date Completed: {FADateString}</h4>
            <h4> 2. Completed by: {FAChecklist.employeeName}</h4>
            <h4> 3. Location: {FAChecklist.location}</h4>
            <h4> 4. Task: {FAChecklist.task}</h4>
            <h4>
              {" "}
              5. There is an applicable and realistic rescue plan in place for
              this work: {FAChecklist.plan === true ? "True" : "False"}
            </h4>
            <h4>
              {" "}
              6. I am not working alone. Working alone is never permitted in a
              scenario requiring fall arrest:{" "}
              {FAChecklist.alone === true ? "True" : "False"}
            </h4>
            <h4> 7. Harness ID Number: {FAChecklist.idNumber}</h4>
            <h4> 8. Webbing: {FAChecklist.webbing}</h4>
            <h4> 9. D Rings: {FAChecklist.dRing}</h4>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CompletedFAChecklists;
