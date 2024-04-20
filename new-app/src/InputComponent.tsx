import { log } from "console";
import React from "react";
interface InputComponentProps {
  userProfileKey: string;
  userProfileValue: string;
  inputLabel: string;
  handleChangeUseProfile: (
    userProfileKey: string,
    userProfileValue: string
  ) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({
  userProfileKey,
  userProfileValue,
  inputLabel,
  handleChangeUseProfile,
}) => {
  return (
    <>
      <div id="form">
        <label>{inputLabel}</label>
        <input
          value={userProfileValue}
          type="text"
          id="my-input"
          onChange={(e) =>
            handleChangeUseProfile(userProfileKey, e.target.value)
          }
        />
      </div>
    </>
  );
};
export default InputComponent;
