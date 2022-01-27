import CompletedFAChecklists from "./CompletedFAChecklists";
import CompletedLVChecklists from "./CompletedLVChecklists";
import CompletedHEChecklists from "./CompletedHEChecklists";

const CompletedChecklists = ({ completedFA, completedLV, completedHE }) => {
  return (
    <div>
      <h1>Fall Arrest Checklists</h1>
      {completedFA.map((FAChecklist) => (
        <CompletedFAChecklists FAChecklist={FAChecklist} />
      ))}
      <h1>Light Vehicle Checklists</h1>
      {completedLV.map((LVChecklist) => (
        <CompletedLVChecklists LVChecklist={LVChecklist} />
      ))}
      <h1>Heavy Equipment Checklists</h1>
      {completedHE.map((HEChecklist) => (
        <CompletedHEChecklists HEChecklist={HEChecklist} />
      ))}
    </div>
  );
};

export default CompletedChecklists;
