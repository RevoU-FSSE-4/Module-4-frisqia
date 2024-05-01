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
    <div>
      {/* Header */}
      <header className="App-header">
        {/* Judul */}
        <h1 className="text-3xl text-amber-700 underline mb-6">RevoU Form</h1>

        {/* Navigasi */}
        <nav className="text-gray-700 underline ">
          <hr />
          {/* Link ke form Register */}
          <Link to="/Register" className="mr-4 hover:text-blue-600">
            Form Register
          </Link>
          {/* Link ke halaman Login */}
          <Link to="/Login" className="mr-4 hover:text-blue-600">
            Login
          </Link>
          {/* Link ke Dashboard */}
          {/* <Link to="/Dashboard">Dashboard</Link> */}
        </nav>

        {/* Routes */}
        <Routes>
          {/* Route untuk Register */}
          <Route path="/Register" element={<RegisterForm />} />
          {/* Route untuk Login */}
          <Route path="/Login" element={<LoginForm />} />
          {/* PrivateRoute untuk melindungi rute Dashboard */}
          {/* <Route path="/Login" element={<PrivateRouter />}> */}
          <Route path="/Dashboard" element={<CategoryDashboard />} />
          {/* </Route> */}
        </Routes>

        {/* Footer */}
        <FooterComponent />
      </header>
    </div>
  );
}

export default App;
