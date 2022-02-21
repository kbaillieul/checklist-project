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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CompletedChecklistProvider } from "./Contexts/CompletedChecklistContext";

function App() {
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
