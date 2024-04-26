import React from "react";
import FooterComponent from "./FooterComponent";
import HeaderComp from "./HeaderComp";
import Example from "../page/Example";
import ButtonComponent from "./ButtonComponent";
import ExComponent from "./ExComponent";
import ExTwoComp from "./ExTwoComp";
import PropsOneComp from "./PropsOneComp";
import MyPage from "./ButEx";
import MyPages from "./ButEx2";
import MyPageTwo from "./butEx3";


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
        <ExTwoComp />
        <h1>HOME</h1>
        <button onClick={handleClick}>Click Me!</button>
        {""}
        {/* ini function parents */}
        <button onClick={() => alert("you click me!")}>Click Me!</button>
        <FooterComponent />
        <ButtonComponent />
        <ExComponent />
        <MyPage />
        <MyPages />
        <MyPageTwo />
        <PropsOneComp judul="Beauty and the Beast" deskripsi="beruk" />
        <PropsOneComp judul="Maleficient" deskripsi="kalong" />
        <PropsOneComp judul="The little Mermaid" deskripsi="dugong" />
      </div>
    </div>
  );
};
export default HomeComponent;
