import List from "./List";

const Completed = ({ completedFA, completedLV, completedHE }) => {
  return (
    <div>
      <h1>Fall Arrest Checklists</h1>
      {completedFA.map((FAChecklist) => (
        <List FAChecklist={FAChecklist} LVChecklist={[]} HEChecklist={[]} />
      ))}
      <h1>Light Vehicle Checklists</h1>
      {completedLV.map((LVChecklist) => (
        <List LVChecklist={LVChecklist} FAChecklist={[]} HEChecklist={[]} />
      ))}
      <h1>Heavy Equipment Checklists</h1>
      {completedHE.map((HEChecklist) => (
        <List HEChecklist={HEChecklist} LVChecklist={[]} FAChecklist={[]} />
      ))}
    </div>
  );
};

export default Completed;
