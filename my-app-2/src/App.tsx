import React, { useState } from "react";
import "./App.css";
import HomeComponent from "./component/HomeComponent";
import ContactComp from "./component/ContactComp";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
// import logo from "./logo.svg";
// import LoginPage from "./LoginPage";
// import QuotePage from "./QuotePage";
// import { Link, Route, Routes } from "react-router-dom";

//import ExampleComp from "./example";

function App() {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [page, setPage] = useState<string>("");

  const SignupSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(5, "Two Short!")
      .max(10, "Two Long!")
      .required("Required!!!"),
    email: Yup.string().required("Required!!!"),
  });
  return (
    // <div className="App">
    //   <h1 className="text-9x1 text-blue-100 unerline">Hello</h1>
    //   <HomeComponent />
    //   }
    // </div>

    <div className="App">
      <header className="App-header">
        <h1>Sign Up</h1>
        <div>
          <Formik
            initialValues={{
              fullname: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, actions) => {
              // setTimeout(() => {
              //alert(JSON.stringify(values, null, 2));
              //   setSubmitting(false);
              setFullName(values.fullname);
            }}
          >
            {/* {(props) => ( */}
            <Form>
              <label> Name :</label>
              <Field
                id="fullname"
                name="fullname"
                placeholder="input Your Name"
              />
              <ErrorMessage name="fullname" component="div" />
              <Field id="email" name="email" placeholder="input Your email" />
              <ErrorMessage name="fullname" component="div" />
              <br />
              <button type="submit">Submit</button>
            </Form>
            {/* )} */}
          </Formik>
          <>fullName: {fullName}</>
        </div>
      </header>
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
