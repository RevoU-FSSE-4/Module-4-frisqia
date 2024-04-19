import React from "react";
interface ButtonComponentProps {
  buttonText: string;
  arrayElement: () => void;
}
const ButtonComponent: React.FC<ButtonComponentProps> = ({
  buttonText,
  arrayElement,
}) => {
  //object distructuring
  return <button onClick={(e) => arrayElement()}>{buttonText}</button>;
};

export default ButtonComponent;
//https://codefile.io/f/RUhjCDfrGg
