import "./App.css";
import FAChecklist from "./components/FAChecklist";
import LVChecklist from "./components/LVChecklist";
import HEChecklist from "./components/HEChecklist";
import Completed from "./components/Completed";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  //state that determined which checklist is visible; 0 for no checklist, 1 for Fall Arrest, 2 for Light Vehicle, 3 for Heavy Equipment
  const [showChecklist, setShowChecklist] = useState(0);
  let fallArrest = [];
  //state to hold completed checklists
  // const [completedChecklists, setCompletedChecklists] = useState([]);
  //completed checklists are added to array that holds all submitted checklist data and is sent to Completed.jsx to be displayed
  const addChecklist = () => {
    // setCompletedChecklists([...completedChecklists, checklist]);
    fallArrest = [...fallArrest, localStorage.getItem("fallArrest")];
    console.log(fallArrest);
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
      {showChecklist === 1 && <FAChecklist onSubmit={addChecklist} />}
      {showChecklist === 2 && <LVChecklist onSubmit={addChecklist} />}
      {showChecklist === 3 && <HEChecklist onSubmit={addChecklist} />}
      {/* <Completed completedChecklists={completedChecklists} /> */}
    </div>
  );
}

export default App;
