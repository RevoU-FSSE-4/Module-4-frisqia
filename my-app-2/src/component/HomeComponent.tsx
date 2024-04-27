import React from "react";
import HeaderComp from "./HeaderComp";
import Example from "../page/Example";
import ButtonComponent from "./ButtonComponent";
import ExComponent from "./ExComponent";
import ExTwoComp from "./ExTwoComp";
import PropsOneComp from "./PropsOneComp";
import MyPage from "./ButEx";
import MyPages from "./ButEx2";
import MyPageTwo from "./buttonValidation";

const HomeComponent = () => {
  function handleClick() {
    alert("you click popup!");
  }
  return (
    <div>
      <HeaderComp />
      <h1 className="text-9x1 text-blue-300">Register</h1>
      <div>
        <h1>
          <Example name="cia" memberSince={2023} />
        </h1>
        <ExTwoComp />
        <h1>HOME</h1>
        <button onClick={handleClick}>Click Me!</button>
        {""}
        ini function parents
        <button onClick={() => alert("you click me!")}>Click Me!</button>
        <ButtonComponent />
        <ExComponent />
        <MyPage />
        <MyPages />
        <PropsOneComp judul="Beauty and the Beast" deskripsi="beruk" />
        <PropsOneComp judul="Maleficient" deskripsi="kalong" />
        <PropsOneComp judul="The little Mermaid" deskripsi="dugong" />
        <MyPageTwo />
      </div>
    </div>
  );
};
export default HomeComponent;
