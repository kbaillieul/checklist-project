import "./App.css";
import FAChecklist from "./components/FAChecklist";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  //state for whether Fall Arrest Checklist form is visibile or not
  const [showFA, setShowFA] = useState(false);
  return (
    <div className="container">
      {/* addFA prop equal to function that changes showFA state to opposite of current state  */}
      <Header addFA={() => setShowFA(!showFA)} />
      {/* If showFA is true Fall Arrest Checklist visible */}
      {showFA && <FAChecklist />}
    </div>
  );
}

export default App;
