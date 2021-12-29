import logo from "./logo.svg";
import "./App.css";
import FAChecklist from "./components/FAChecklist";
import Header from "./components/Header";
import Button from "./components/Button";

function App() {
  return (
    <div className="container">
      <Header />
      <Button text="Fall Arrest Checklist" />
      <Button text="Light Vehicle Checklist" />
      <Button text="Heavy Equipment Checklist" />
      <FAChecklist />
    </div>
  );
}

export default App;
