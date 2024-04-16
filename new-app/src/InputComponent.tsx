import React from "react";
interface InputComponentProps {
  InputText: string;
}
const InputComponent: React.FC<InputComponentProps> = ({ InputText }) => {
  return <input required></input>;
};

export default InputComponent;
