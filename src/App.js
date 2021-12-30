import logo from "./logo.svg";
import "./App.css";
import FAChecklist from "./components/FAChecklist";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [showFA, setShowFA] = useState(false);
  return (
    <div className="container">
      <Header addFA={() => setShowFA(!showFA)} showFA={showFA} />

      <FAChecklist />
    </div>
  );
}

export default App;
