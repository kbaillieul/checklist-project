import React from "react";

const List = ({ FAChecklist, LVChecklist, HEChecklist }) => {
  return (
    <div>
      <h2>{FAChecklist.date}</h2>
      {/* <h2>{LVChecklist.date}</h2>
      <h2>{HEChecklist.date}</h2> */}
    </div>
  );
};

export default List;
