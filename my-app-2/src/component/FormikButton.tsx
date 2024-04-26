import { Field, Formik, Form } from "formik";
import React, { useState } from "react";
import "./App.css";

function FormikButton() {
  const [fullName, setFullName] = useState<string>("");
  return (
    <div className="App">
      <header>
        <h1>Sign Up</h1>
        <div>
          <Formik
            initialValues={{
              fullname: "",
            }}
            onSubmit={(values, actions) => {
              // setTimeout(() => {
              //alert(JSON.stringify(values, null, 2));
              //   setSubmitting(false);
              setFullName(values.fullname);
            }}
          >
            {(props) => (
              <Form>
                <label> Name :</label>
                <Field
                  type="text"
                  id="fullname"
                  fullname="fullname"
                  placeholder="input Your Name"
                />
                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>
          <>fullName: {fullName}</>
        </div>
      </header>
    </div>
  );
}
export default FormikButton;
