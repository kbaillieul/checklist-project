import "./App.css";
import {
  Header,
  FAChecklist,
  LVChecklist,
  HEChecklist,
  Completed,
} from "./components/Index";
import { useState } from "react";
import {
  getFAFromLocal,
  getLVFromLocal,
  getHEFromLocal,
} from "./components/local";

function App() {
  //state that determined which checklist is visible; 0 for no checklist, 1 for Fall Arrest, 2 for Light Vehicle, 3 for Heavy Equipment
  const [showChecklist, setShowChecklist] = useState(0);
  const [completedFA, setCompletedFA] = useState(getFAFromLocal());
  const [completedLV, setCompletedLV] = useState(getLVFromLocal());
  const [completedHE, setCompletedHE] = useState(getHEFromLocal());
  const refreshFA = () => {
    setCompletedFA(getFAFromLocal());
  };
  const refreshLV = () => {
    setCompletedLV(getLVFromLocal());
  };
  const refreshHE = () => {
    setCompletedHE(getHEFromLocal());
  };
  return (
    <div className="container">
      {/* Props pass to header, pass to buttons. Depending on button clicked, setShowChecklist value changes to show checklist selected from buttons */}
      <Header
        addFA={() => setShowChecklist(1)}
        addLV={() => setShowChecklist(2)}
        addHE={() => setShowChecklist(3)}
      />
      {/* onSubmit prop passed to each checklist. When Submit button clicked, addChecklist function adds completed checklist to list of completed checklists */}
      {showChecklist === 1 && <FAChecklist onSubmit={refreshFA} />}
      {showChecklist === 2 && <LVChecklist onSubmit={refreshLV} />}
      {showChecklist === 3 && <HEChecklist onSubmit={refreshHE} />}
      <Completed
        completedFA={completedFA}
        completedLV={completedLV}
        completedHE={completedHE}
      />
    </div>
  );
}

export default App;
