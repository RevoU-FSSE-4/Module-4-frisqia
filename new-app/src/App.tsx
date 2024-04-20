import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";
import { Formik, Form } from "formik";

interface FullUserProfile {
  fullName: string;
  email: string;
  occupation: string;
  country: string;
}

function App() {
  const [userProfile, setUserProfile] = useState<FullUserProfile>({
    fullName: "",
    email: "",
    occupation: "",
    country: "",
  });
  const [page, setPage] = useState<string>("firstPage");
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
        <h1>hello {userProfile.fullName}</h1>
        {page === "firstPage" && (
          <div id="firstpageform">
            <InputComponent
              userProfileKey="fullName"
              userProfileValue={userProfile.fullName}
              inputLabel="Name : "
              handleChangeUseProfile={handleChangeUseProfile}
            />
            <InputComponent
              userProfileKey="email"
              userProfileValue={userProfile.email}
              inputLabel="E-mail : "
              handleChangeUseProfile={handleChangeUseProfile}
            />
            <button onClick={(e) => setPage("secondPage")}>submit</button>
          </div>
        )}
        {page === "secondPage" && (
          <div id="secondpageform">
            <InputComponent
              userProfileKey="occupation"
              userProfileValue={userProfile.occupation}
              inputLabel="ocuupation : "
              handleChangeUseProfile={handleChangeUseProfile}
            />
            <InputComponent
              userProfileKey="hobby"
              userProfileValue={userProfile.country}
              inputLabel="hobby : "
              handleChangeUseProfile={handleChangeUseProfile}
            />
            <button onClick={(e) => setPage("firstPage")}>previous</button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
