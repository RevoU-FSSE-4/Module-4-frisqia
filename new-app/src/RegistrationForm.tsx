import React, { useState } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import InputComponent from "./InputComponent";

interface FormValues {
  fullName: string;
  email: string;
  dob: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  username: string;
  password: string;
}

const RegistrationForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const initialValues: FormValues = {
    fullName: "",
    email: "",
    dob: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    username: "",
    password: "",
  };

  const validationSchemaStep1 = Yup.object().shape({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    dob: Yup.string().required("Date of Birth is required"),
  });

  const validationSchemaStep2 = Yup.object().shape({
    streetAddress: Yup.string().required("Street address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zipCode: Yup.string().required("Zip code is required"),
  });

  const validationSchemaStep3 = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character"
      ),
  });

  const onSubmit = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="container mx-auto">
      <Formik
        initialValues={initialValues}
        validationSchema={
          step === 1
            ? validationSchemaStep1
            : step === 2
            ? validationSchemaStep2
            : validationSchemaStep3
        }
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {step === 1 && (
              <>
                <InputComponent name="fullName" label="Full Name" />
                {/* Other fields for step 1 */}
              </>
            )}
            {step === 2 && (
              <>
                <InputComponent name="streetAddress" label="Street Address" />
                {/* Other fields for step 2 */}
              </>
            )}
            {step === 3 && (
              <>
                <InputComponent name="username" label="Username" />
                {/* Other fields for step 3 */}
              </>
            )}
            <div className="mt-4">
              {step > 1 && (
                <button type="button" onClick={prevStep} className="mr-4">
                  Previous
                </button>
              )}
              {step < 3 && (
                <button type="button" onClick={nextStep} className="mr-4">
                  Next
                </button>
              )}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
