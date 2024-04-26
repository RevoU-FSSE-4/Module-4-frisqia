import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import HomeComponent from "./component/HomeComponent";
import ContactComp from "./component/ContactComp";

// import LoginPage from "./LoginPage";
// import QuotePage from "./QuotePage";
// import { Link, Route, Routes } from "react-router-dom";

//import ExampleComp from "./example";

function App() {
  return (
    <div className="App">
      <h1 className="text-9x1 text-blue-100 unerline">Hello</h1>
      <HomeComponent />
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <h1>React Router</h1>
    //     <Routes>
    //       <Route path="/Login" Component={LoginPage}></Route>
    //       <Route path="/Quote" Component={QuotePage}></Route>
    //     </Routes>
    //   </header>
    // </div>
  );
}

export default App;
