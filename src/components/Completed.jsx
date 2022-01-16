import React from "react";
import List from "./List";

const Completed = ({ completedChecklists }) => {
  const completedList = completedChecklists.map((checklist) => (
    <List checklist={checklist} />
  ));
  return <div>{completedList}</div>;
};

export default Completed;
