import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";

interface FirstPage {
  fullname: string;
  email: string;
}

function App() {
  const [userProfile, setUserProfile] = useState<FirstPage>({
    fullname: "",
    email: "",
  });
  function handleChangeUseProfile(
    userProfileKey: string,
    userProfileValue: string
  ) {
    setUserProfile((oldProfile) => {
      return { ...oldProfile, [userProfileKey]: userProfileValue };
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>hello{userProfile.fullname}</h1>
        <h1>your email{userProfile.email}</h1>
        <InputComponent
          userProfileKey="fullName"
          userProfileValue={userProfile.fullname}
          inputLabel="Name"
          handleChangeUseProfile={handleChangeUseProfile}
        />
        <InputComponent
          userProfileKey="email"
          userProfileValue={userProfile.email}
          inputLabel="Email"
          handleChangeUseProfile={handleChangeUseProfile}
        />
      </header>
    </div>
  );
}

export default App;
