import { log } from "console";
import React from "react";
interface InputComponentProps {
  inputLabel: string;
  inputLabel1: string;
  changeName: (newUsername: string) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({
  inputLabel,
  inputLabel1,
  changeName,
}) => {
  return (
    <>
      <div>
        <label>{inputLabel}</label>
        <br />
        <input
          type="text"
          id="name"
          placeholder="unsername"
          onChange={(e) => {
            changeName(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <label>{inputLabel1}</label>
        <br />
        <input
          type="password"
          id="password"
          placeholder="Input Your password"
        ></input>
      </div>
    </>
  );
};
export default InputComponent;
