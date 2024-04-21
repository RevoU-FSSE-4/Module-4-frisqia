import React from "react";
import { Field, ErrorMessage } from "formik";

interface InputComponentProps {
  name: string;
  label: string;
}

const InputComponent: React.FC<InputComponentProps> = ({ name, label }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field type="text" name={name} />
      <ErrorMessage name={name} component="div" />
    </div>
  );
};

export default InputComponent;
