import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const AccordionList = (props) => {
  const date = new Date(props.checklist.date);

  const dateString = date.toString().substr(0, 15);

  //counter tracks number of issues identified in checklist
  let counter = 0;

  if (props.checklist.dRing === "Issue") {
    counter += 1;
  }
  if (props.checklist.webbing === "Issue") {
    counter += 1;
  }
  if (props.checklist.alarm === "Issue") {
    counter += 1;
  }
  if (props.checklist.hydraulics === "Issue") {
    counter += 1;
  }
  if (props.checklist.fluid === "Issue") {
    counter += 1;
  }
  if (props.checklist.hazard === "Issue") {
    counter += 1;
  }
  if (props.checklist.oil === "Issue") {
    counter += 1;
  }
  if (props.checklist.coolant === "Issue") {
    counter += 1;
  }
  if (props.checklist.fuel === "Issue") {
    counter += 1;
  }
  if (props.checklist.confirm === "Issue") {
    counter += 1;
  }
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="completed-checklist"
          id="completed-checklist"
        >
          <Typography sx={{ width: "70%", flexShrink: 0 }}>
            {dateString}
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
            <h4>1. Date Completed: {dateString}</h4>
            {props.children}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AccordionList;
