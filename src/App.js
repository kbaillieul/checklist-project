import "./App.css";
import {
  Header,
  FAChecklist,
  LVChecklist,
  HEChecklist,
  CompletedChecklists,
  FAMain,
} from "./components/Index";
import { useState } from "react";
import {
  getFAFromLocal,
  getLVFromLocal,
  getHEFromLocal,
} from "./components/local";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // //state that determined which checklist is visible; 0 for no checklist, 1 for Fall Arrest, 2 for Light Vehicle, 3 for Heavy Equipment
  // const [showChecklist, setShowChecklist] = useState(0);
  // //states to hold completed checklists of each type
  // const [completedFA, setCompletedFA] = useState(getFAFromLocal());
  // const [completedLV, setCompletedLV] = useState(getLVFromLocal());
  // const [completedHE, setCompletedHE] = useState(getHEFromLocal());
  // //On click of submit button in each checklist, refresh function is called to get new checklist values from local storage
  // const refreshFA = () => {
  //   setCompletedFA(getFAFromLocal());
  // };
  // const refreshLV = () => {
  //   setCompletedLV(getLVFromLocal());
  // };
  // const refreshHE = () => {
  //   setCompletedHE(getHEFromLocal());
  // };
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/fallarrest" element={<FAMain />} />
          <Route path="/newfallarrest" element={<FAChecklist />} />
        </Routes>
      </Router>

      {/* Props pass to header, pass to buttons. Depending on button clicked, setShowChecklist value changes to show checklist selected from buttons
      <Header
        showFAChecklist={() => setShowChecklist(1)}
        showLVChecklist={() => setShowChecklist(2)}
        showHEChecklist={() => setShowChecklist(3)}
      />
      {/* onSubmit prop passed to each checklist. When Submit button clicked, refresh function adds completed checklist to list of completed checklists */}
      {/* {showChecklist === 1 && <FAChecklist onSubmit={refreshFA} />}
      {showChecklist === 2 && <LVChecklist onSubmit={refreshLV} />}
      {showChecklist === 3 && <HEChecklist onSubmit={refreshHE} />}
      {/* States holding completed checklists passed to CompletedChecklists to be displayed on page */}
      {/* <CompletedChecklists
        completedFA={completedFA}
        completedLV={completedLV}
        completedHE={completedHE}
      /> */}
    </div>
  );
}

export default App;
