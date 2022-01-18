import React from "react";
import List from "./List";

const Completed = ({ completedChecklists }) => {
  return (
    <div>
      {/* {completedChecklists.map((checklist) => (
        <List checklist={checklist.date} />
      ))} */}
      {console.log(JSON.stringify(completedChecklists))}
    </div>
  );
};

export default Completed;
