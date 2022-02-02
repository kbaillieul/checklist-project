import React from "react";
import { useParams } from "react-router-dom";

const FAChecklistDetails = () => {
  let params = useParams();
  return (
    <div>
      <h2> Checklist: {params.key}</h2>
    </div>
  );
};

export default FAChecklistDetails;
