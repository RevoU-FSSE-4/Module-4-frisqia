import React from "react";
//import FormComponent from "./FormComponent";
import FooterLine from "./FooterLine";

const HomeComponent = () => {
  function handleClick() {
    alert("you click popup!");
  }
  return (
    <div>
      <div>
        <h1>HOME</h1>
        <button onClick={handleClick}>Click Me!</button>
        {""}
        {/* ini function parents */}
        <button onClick={() => alert("you click me!")}>Click Me!</button>
        {/* <FormComponent /> */}
        <FooterLine />
      </div>
    </div>
  );
};
export default HomeComponent;
