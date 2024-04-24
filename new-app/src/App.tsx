import React from "react";
import RegistrationForm from "./RegistrationForm";
import { Route, Routes } from "react-router-dom";
import QuotePage from "./QuotePage";
import LoginPage from "./LoginPage";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/login" Component={LoginPage} />
          <Route path="/quotes" Component={QuotePage} />
        </Routes>
        <LoginPage />
        <QuotePage />
      </header>
    </div>
  );
};

export default App;
