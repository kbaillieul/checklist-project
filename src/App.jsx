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
import { CompletedChecklistProvider } from "./Contexts/CompletedChecklistContext";

function App() {
  // //states to hold completed checklists of each type
  // const [completedFA, setCompletedFA] = useState(getFallArrestChecklists());
  // const [completedLV, setCompletedLV] = useState(getLightVehicleChecklists());
  // const [completedHE, setCompletedHE] = useState(getHeavyEquipmentChecklists());
  // //On click of submit button in each checklist, refresh function is called to get new checklist values from local storage
  // const refreshFA = () => {
  //   setCompletedFA(getFallArrestChecklists());
  // };
  // const refreshLV = () => {
  //   setCompletedLV(getLightVehicleChecklists());
  // };
  // const refreshHE = () => {
  //   setCompletedHE(getHeavyEquipmentChecklists());
  // };
  return (
    <div className="container">
      <CompletedChecklistProvider>
        <Router>
          <Routes>
            <Route path="/" element={<NavBar />}>
              <Route index element={<Home />} />
              <Route path="fall-arrest" element={<FAMain />}>
                <Route path="new" element={<NewFAChecklist />} />
                <Route
                  path="completed"
                  element={<CompletedFAChecklistsMap />}
                ></Route>
              </Route>
              <Route path="light-vehicle" element={<LVMain />}>
                <Route path="new" element={<NewLVChecklist />} />
                <Route
                  path="completed"
                  element={<CompletedLVChecklistsMap />}
                ></Route>
              </Route>
              <Route path="heavy-equipment" element={<HEMain />}>
                <Route path="new" element={<NewHEChecklist />} />
                <Route
                  path="completed"
                  element={<CompletedHEChecklistsMap />}
                ></Route>
              </Route>
            </Route>
          </Routes>
        </Router>
      </CompletedChecklistProvider>
    </div>
  );
}

export default App;
