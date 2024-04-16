import React from "react";
interface ButtonComponentProps {
  buttonText: string;
}
const ButtonComponent: React.FC<ButtonComponentProps> = ({ buttonText }) => {
  return <button>Submit</button>;
};

export default ButtonComponent;
