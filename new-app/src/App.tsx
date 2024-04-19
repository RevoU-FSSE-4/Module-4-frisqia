import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";

function App() {
  let nama = "submit";
  let inputLabel = "Unsername: ";
  let inputLabel1 = "Password: ";
  const [username, setUsername] = useState<string>("welcome");
  const [myArray, setMyArray] = useState<string[]>([
    "cia",
    "oji",
    "fahmi",
    "mpi",
  ]);
  function changeName(newUsername: string) {
    setUsername(newUsername);
  }
  function arrayElement() {
    myArray.push("abay");
    console.log(myArray);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>sign in</h1>
        <p>Hello {username}</p>
        <InputComponent
          inputLabel={inputLabel}
          inputLabel1={inputLabel1}
          changeName={changeName}
        />
        <ButtonComponent buttonText={nama} arrayElement={arrayElement} />
      </header>
    </div>
  );
}

export default App;
