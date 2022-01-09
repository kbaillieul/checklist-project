import "./App.css";
import FAChecklist from "./components/FAChecklist";
import LVChecklist from "./components/LVChecklist";
import HEChecklist from "./components/HEChecklist";
import Completed from "./components/Completed";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  //state for whether Fall Arrest Checklist form is visibile or not
  const [showChecklist, setShowChecklist] = useState(0);
  const [completedChecklists, setCompletedChecklists] = useState([]);
  const addChecklist = (checklist) => {
    setCompletedChecklists(...completedChecklists, checklist);
  };
  return (
    <div className="container">
      {/* addFA prop equal to function that changes showFA state to opposite of current state  */}
      <Header
        addFA={() => setShowChecklist(1)}
        addLV={() => setShowChecklist(2)}
        addHE={() => setShowChecklist(3)}
      />
      {/* If showFA is true Fall Arrest Checklist visible */}
      {showChecklist === 1 && <FAChecklist onSubmit={addChecklist} />}
      {showChecklist === 2 && <LVChecklist onSubmit={addChecklist} />}
      {showChecklist === 3 && <HEChecklist onSubmit={addChecklist} />}
      <Completed completedChecklists={completedChecklists} />
    </div>
  );
}

export default App;
