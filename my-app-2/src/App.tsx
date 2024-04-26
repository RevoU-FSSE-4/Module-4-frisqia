import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./LoginPage";
import QuotePage from "./QuotePage";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>React Router</h1> */}
        <Routes>
          <Route path="/Login" Component={LoginPage}></Route>
          <Route path="/Quote" Component={QuotePage}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
