import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Clicker from "./components/Clicker";

function App() {
  const name = "Kristine";

  return (
    <Clicker initial={10}></Clicker>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     ></a>
    //     <Greet name={name} color="green"></Greet>
    //   </header>
    // </div>
  );
}

export default App;
