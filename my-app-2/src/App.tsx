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
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-9x1 text-blue-300 underline">Registrer</h1>
        <HomeComponent />
      </header>
    </div>
  );
  // const [fullName, setFullName] = useState<string>("");
  // const [email, setEmail] = useState<string>("");
  // const [page, setPage] = useState<number>(1);

  // const SignupSchema = Yup.object().shape({
  //   firstname: Yup.string()
  //     .min(5, "Two Short!")
  //     .max(10, "Two Long!")
  //     .required("Required!!!"),
  //   email: Yup.string().required("Required!!!"),
  // });
  // function nextForm() {
  //   let nextPage = +1;
  //   setPage(nextPage);
  // }
  // function prevForm() {
  //   let prevPage = -1;
  //   setPage(prevPage);
  // }
  // switch (page) {
  //   case 1:
  //     return (
  //       <div className="App">
  //         <header className="App-header">
  //           <h1>Page 1</h1>
  //           <Formik
  //             initialValues={{
  //               firstName: "",
  //               lastName: "",
  //               email: "",
  //             }}
  //             onSubmit={(values) => {
  //               setEmail(values.firstName);
  //               nextForm();
  //             }}
  //           >
  //             <Form>
  //               <label>First Name :</label>
  //               <Field
  //                 id=" firstName"
  //                 name="firstName"
  //                 placeholder="cia"
  //               ></Field>
  //               <ErrorMessage name="firstName" component="div" />
  //               <button onClick={nextForm}>Next</button>
  //             </Form>
  //           </Formik>
  //         </header>
  //       </div>
  //     );
  //   case 2:
  //     return (
  //       <div className="App">
  //         <header className="App-header">
  //           <h1>Page 2</h1>
  //           <button onClick={prevForm}>Prev</button>
  //           <button onClick={nextForm}>Next</button>
  //         </header>
  //       </div>
  //     );
  //   default:
  //     return <div>success</div>;
  // }

  // <div className="App">
  //   <header className="App-header">
  //     <h1>Sign Up</h1>
  //     <div>
  //       <Formik
  //         initialValues={{
  //           fullname: "",
  //           email: "",
  //         }}
  //         validationSchema={SignupSchema}
  //         onSubmit={(values, actions) => {
  //           // setTimeout(() => {
  //           //alert(JSON.stringify(values, null, 2));
  //           //   setSubmitting(false);
  //           setFullName(values.fullname);
  //         }}
  //       >
  //         {/* {(props) => ( */}
  //         <Form>
  //           <label> Name :</label>
  //           <Field
  //             id="fullname"
  //             name="fullname"
  //             placeholder="input Your Name"
  //           />
  //           <ErrorMessage name="fullname" component="div" />
  //           <Field id="email" name="email" placeholder="input Your email" />
  //           <ErrorMessage name="fullname" component="div" />
  //           <br />
  //           <button type="submit">Submit</button>
  //         </Form>
  //         {/* )} */}
  //       </Formik>
  //       <>fullName: {fullName}</>
  //     </div>
  //   </header>
  // </div>

  // <div className="App">
  //   <header className="App-header">
  //     <h1>React Router</h1>
  //     <Routes>
  //       <Route path="/Login" Component={LoginPage}></Route>
  //       <Route path="/Quote" Component={QuotePage}></Route>
  //     </Routes>
  //   </header>
  // </div>
  //);
}

export default App;
