const CompletedChecklistsList = ({ FAChecklist, LVChecklist, HEChecklist }) => {
  return (
    <div>
      <h3>
        {FAChecklist.date}
        {FAChecklist.alone === false
          ? " Issue noted with worker completing work alone"
          : ""}{" "}
        {FAChecklist.plan === false ? " Issue noted with rescue plan" : ""}{" "}
        {FAChecklist.webbing === "Issue" ? " Issue noted with webbing" : ""}{" "}
        {FAChecklist.dRing === "Issue" ? " Issue noted with D Ring" : ""}{" "}
      </h3>
      <h3>
        {LVChecklist.date}
        {LVChecklist.oil === "Issue" ? " Issue noted with oil level" : ""}{" "}
        {LVChecklist.coolant === "Issue"
          ? " Issue noted with coolant level"
          : ""}{" "}
      </h3>
      <h3>
        {HEChecklist.date}
        {HEChecklist.alarm === "Issue"
          ? " Issue noted with backup alarm"
          : ""}{" "}
        {HEChecklist.hydraulics === "Issue"
          ? " Issue noted with hydraulics"
          : ""}{" "}
      </h3>
    </div>
  );
};

export default CompletedChecklistsList;
