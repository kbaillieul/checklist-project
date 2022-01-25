const CompletedChecklistsList = ({ FAChecklist, LVChecklist, HEChecklist }) => {
  return (
    <div>
      {FAChecklist !== [] && <ol>{FAChecklist.date}</ol>}
      {FAChecklist.plan === false && <li>Issue noted with rescue plan</li>}
      {FAChecklist.alone === false && <li>Issue noted with working alone</li>}
      {FAChecklist.webbing === "Issue" && <li>Issue noted with webbing</li>}
      {FAChecklist.dRing === "Issue" && <li>Issue noted with D Rings</li>}

      {LVChecklist !== [] && <ol>{LVChecklist.date}</ol>}
      {LVChecklist.oil === "Issue" && <li>Issue noted with oil level</li>}
      {LVChecklist.coolant === "Issue" && <li>Issue noted with coolant</li>}

      {HEChecklist !== [] && <ol>{HEChecklist.date}</ol>}
      {HEChecklist.alarm === "Issue" && <li>Issue noted with backup alarm</li>}
      {HEChecklist.hydraulics === "Issue" && (
        <li>Issue noted with hydraulics</li>
      )}
    </div>
  );
};

export default CompletedChecklistsList;
