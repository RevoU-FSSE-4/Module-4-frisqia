import React from "react";
import FooterComponent from "./FooterComponent";
import HeaderComp from "./HeaderComp";
import Example from "../page/Example";

const HomeComponent = () => {
  function handleClick() {
    alert("you click popup!");
  }
  return (
    <div>
      <HeaderComp />
      <div>
        <h1>
          <Example name="cia" memberSince={2023} />
        </h1>
        <h1>HOME</h1>
        <button onClick={handleClick}>Click Me!</button>{" "}
        {/* ini function parents */}
        <button onClick={() => alert("you click me!")}>Click Me!</button>
        <FooterComponent />
      </div>
    </div>
  );
};
export default HomeComponent;
