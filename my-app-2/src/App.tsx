import React, { useState } from "react";
import "./App.css";
import HomeComponent from "./component/HomeComponent";
import ContactComp from "./component/ContactComp";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
// import logo from "./logo.svg";

import { Link, Route, Routes, useNavigate } from "react-router-dom";
import QuotePage from "./page/QuotePage";
import FooterComponent from "./component/FooterComponent";
import RegisterForm from "./Assigment/RegisterForm";
import LoginForm from "./Assigment/LoginForm";
import PrivateRouter from "./Assigment/PrivateRouter";
import CategoryDashboard from "./Assigment/CategoryDashboard.tsx";

//import ExampleComp from "./example";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-9x1 text-amber-700 underline">RevoU Form</h1>
        {/* <HomeComponent /> */}
        <div>
          <nav className="text-grey-700 underline">
            <hr />
            <Link to="/Register"> Form Register </Link>

            <Link to="/Login"> Login</Link>

            <Link to="/Dashbord"> test</Link>
          </nav>
          <Routes>
            <Route path="/Register" element={<RegisterForm />}></Route>
            <Route path="/Login" element={<LoginForm />}></Route>
            {/* <Route path="Dashboard" element={<CategoryDashboard />}></Route> */}
          </Routes>
          <FooterComponent />
        </div>
      </header>
    </div>
  );
}

export default App;
