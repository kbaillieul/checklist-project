import "./App.css";
import {
  Home,
  NewFAChecklist,
  NewLVChecklist,
  NewHEChecklist,
  FAMain,
  LVMain,
  HEMain,
  CompletedFAChecklistsMap,
  CompletedLVChecklistsMap,
  CompletedHEChecklistsMap,
  NavBar,
} from "./components/Index";
import { useState } from "react";
import {
  getFallArrestChecklists,
  getLightVehicleChecklists,
  getHeavyEquipmentChecklists,
} from "./database";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CompletedFAContext } from "./Contexts/CompletedFAContext";

function App() {
  // //states to hold completed checklists of each type
  const [completedFA, setCompletedFA] = useState(getFallArrestChecklists());
  const [completedLV, setCompletedLV] = useState(getLightVehicleChecklists());
  const [completedHE, setCompletedHE] = useState(getHeavyEquipmentChecklists());
  // //On click of submit button in each checklist, refresh function is called to get new checklist values from local storage
  const refreshFA = () => {
    setCompletedFA(getFallArrestChecklists());
  };
  const refreshLV = () => {
    setCompletedLV(getLightVehicleChecklists());
  };
  const refreshHE = () => {
    setCompletedHE(getHeavyEquipmentChecklists());
  };
  return (
    <div className="container">
      <CompletedFAContext.Provider value={(completedFA, setCompletedFA)}>
        <Router>
          <Routes>
            <Route path="/" element={<NavBar />}>
              <Route index element={<Home />} />
              <Route path="fall-arrest" element={<FAMain />}>
                <Route
                  path="new"
                  element={<NewFAChecklist onSubmit={refreshFA} />}
                />
                <Route
                  path="completed"
                  element={<CompletedFAChecklistsMap />}
                ></Route>
              </Route>
              <Route path="light-vehicle" element={<LVMain />}>
                <Route
                  path="new"
                  element={<NewLVChecklist onSubmit={refreshLV} />}
                />
                <Route
                  path="completed"
                  element={
                    <CompletedLVChecklistsMap completedLV={completedLV} />
                  }
                ></Route>
              </Route>
              <Route path="heavy-equipment" element={<HEMain />}>
                <Route
                  path="new"
                  element={<NewHEChecklist onSubmit={refreshHE} />}
                />
                <Route
                  path="completed"
                  element={
                    <CompletedHEChecklistsMap completedHE={completedHE} />
                  }
                ></Route>
              </Route>
            </Route>
          </Routes>
        </Router>
      </CompletedFAContext.Provider>
    </div>
  );
}

export default App;
