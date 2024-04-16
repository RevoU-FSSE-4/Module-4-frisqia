import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";

function App() {
  const [username, setUsername] = useState<string>("haii");
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          
        </a> */}
        <h1>Halo{username}</h1>
        <InputComponent InputText={"your name"} />
        <ButtonComponent buttonText={"hello"} />
      </header>
    </div>
  );
}

export default App;
