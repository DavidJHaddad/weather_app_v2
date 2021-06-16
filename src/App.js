import logo from './logo.svg';
import './App.css';
import React from "react";
import Forecast from "./components/Forecast/Forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
      </header>
      <main>
        <Forecast />
      </main>
      <footer>
        Page Created by David and David
      </footer>
    </div>
  );
}

export default App;
