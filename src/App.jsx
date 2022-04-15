import "./App.css";
import {
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
  Homepage,
} from "./components/Index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CompletedChecklistProvider } from "./Contexts/CompletedChecklistContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
  useEffect(() => {
    const themeType = localStorage.getItem("darkMode") || "dark";
    if (themeType !== "dark") {
      setDarkMode(false);
    }
  }, []);

  const changeTheme = () => {
    localStorage.setItem("darkMode", darkMode ? "light" : "dark");
    setDarkMode(!darkMode);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <CompletedChecklistProvider>
          <Router basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route
                path="/"
                element={<NavBar check={darkMode} change={changeTheme} />}
              >
                <Route index element={<Homepage />} />
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
      </ThemeProvider>
    </>
  );
}

export default App;
