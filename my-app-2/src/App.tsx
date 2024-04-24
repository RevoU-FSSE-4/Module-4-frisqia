import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./LoginPage";
import QuotePage from "./QuotePage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginPage />
        <QuotePage />
      </header>
    </div>
  );
}

export default App;
