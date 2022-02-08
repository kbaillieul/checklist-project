import "./App.css";
import {
  Header,
  FAChecklist,
  LVChecklist,
  HEChecklist,
  FAMain,
  LVMain,
  HEMain,
  FAChecklistDetails,
  Navbar,
  CompletedFAChecklistsMap,
  CompletedLVChecklistsMap,
  CompletedHEChecklistsMap,
  LVChecklistDetails,
  HEChecklistDetails,
} from "./components/Index";
import { useState } from "react";
import {
  getFAFromLocal,
  getLVFromLocal,
  getHEFromLocal,
} from "./components/local";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // //states to hold completed checklists of each type
  const [completedFA, setCompletedFA] = useState(getFAFromLocal());
  const [completedLV, setCompletedLV] = useState(getLVFromLocal());
  const [completedHE, setCompletedHE] = useState(getHEFromLocal());
  // //On click of submit button in each checklist, refresh function is called to get new checklist values from local storage
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
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Header />} />
            <Route path="fallarrest" element={<FAMain />}>
              <Route
                path="new"
                element={<FAChecklist onSubmit={refreshFA} />}
              />
              <Route
                path="completed"
                element={<CompletedFAChecklistsMap completedFA={completedFA} />}
              >
                <Route path=":key" element={<FAChecklistDetails />} />
              </Route>
            </Route>
            <Route path="lightvehicle" element={<LVMain />}>
              <Route
                path="new"
                element={<LVChecklist onSubmit={refreshLV} />}
              />
              <Route
                path="completed"
                element={<CompletedLVChecklistsMap completedLV={completedLV} />}
              >
                <Route path=":key" element={<LVChecklistDetails />} />
              </Route>
            </Route>
            <Route path="heavyequipment" element={<HEMain />}>
              <Route
                path="new"
                element={<HEChecklist onSubmit={refreshHE} />}
              />
              <Route
                path="completed"
                element={<CompletedHEChecklistsMap completedHE={completedHE} />}
              >
                <Route path=":key" element={<HEChecklistDetails />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
