const List = ({ FAChecklist, LVChecklist, HEChecklist }) => {
  return (
    <div>
      <h3>
        {FAChecklist.date}
        {FAChecklist.webbing === "Issue"
          ? " Issue noted with webbing"
          : ""}{" "}
      </h3>
      <h3>{LVChecklist.date}</h3>
      <h3>{HEChecklist.date}</h3>
    </div>
  );
};

export default List;
