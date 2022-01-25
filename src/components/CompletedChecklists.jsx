import CompletedChecklistsList from "./CompletedChecklistsList";

const CompletedChecklists = ({ completedFA, completedLV, completedHE }) => {
  return (
    <div>
      <h1>Fall Arrest Checklists</h1>
      {completedFA.map((FAChecklist) => (
        <CompletedChecklistsList
          FAChecklist={FAChecklist}
          LVChecklist={[]}
          HEChecklist={[]}
        />
      ))}
      <h1>Light Vehicle Checklists</h1>
      {completedLV.map((LVChecklist) => (
        <CompletedChecklistsList
          LVChecklist={LVChecklist}
          FAChecklist={[]}
          HEChecklist={[]}
        />
      ))}
      <h1>Heavy Equipment Checklists</h1>
      {completedHE.map((HEChecklist) => (
        <CompletedChecklistsList
          HEChecklist={HEChecklist}
          LVChecklist={[]}
          FAChecklist={[]}
        />
      ))}
    </div>
  );
};

export default CompletedChecklists;
