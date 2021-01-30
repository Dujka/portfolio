import logo from "./logo.svg";
import Header from "./Components/Header.js";
import CircleWrapper from "./Components/CircleWrapper.js";
import ConentWrapper from "./Components/ConentWrapper.js";
import "./App.css";

function App() {
  return (
    <div className="App min-h-screen">
      <Header />
      <CircleWrapper />
      <ConentWrapper />
    </div>
  );
}

export default App;
