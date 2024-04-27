import { useState } from "react";
import { userProps } from "../page/Example";

export default function MyPageTwo() {
  const [name, setName] = useState<string>("");
  const [errorMessageName, setErrorMessageName] = useState<string>("");
  const [errorMessageEmail, setErrorMessageEmail] = useState<string>("");
  const [errorMessagePassword, setErrorMessagePassword] = useState<string>("");

  const [page, setPage] = useState<string>("firstPage");

  function handleSubmit(event: any) {
    event.preventDefault(); //agar tidak ke reload
    //const formData = new FormData(event.target);
    alert(name);
    // console.log(formData.get("textExample"));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="text-left">
          <label>Nama: </label>
        </div>
        <div>
          <input
            type="text"
            placeholder="Input Your name"
            name="textExample"
            onChange={(event) => {
              const value = event.target.value;
              if (value.length === 0) {
                setErrorMessageName("Cannot be empty!");
              } else {
                setErrorMessageName("");
                setName(event.target.value);
              }
            }}
          />
          <br />
          <> {errorMessageName}</>
          {/* <button disabled={name.length < 3}>Click me</button> */}
        </div>
        <div className="text-left">
          <label>Email: </label>
        </div>
        <div>
          <input
            type="text"
            placeholder="Input Your Email"
            name="textExample"
            onChange={(event) => {
              const value = event.target.value;
              if (value.length === 0) {
                setErrorMessageEmail("Cannot be empty!");
              } else {
                setErrorMessageEmail("");
                setName(event.target.value);
              }
            }}
          />
          <br />
          <> {errorMessageEmail}</>
        </div>
        <div className="text-left">
          <label>Password</label>
        </div>
        <div>
          <input
            type="Password"
            placeholder="Create Your Password"
            name="textExample"
            onChange={(event) => {
              const value = event.target.value;
              if (value.length === 0) {
                setErrorMessagePassword("Cannot be empty!");
              } else {
                setErrorMessagePassword("");
                setName(event.target.value);
              }
            }}
          />
          <br />
          <> {errorMessagePassword}</>

          <div className="text-left">
            <label>Password</label>
          </div>
          <div>
            <input
              type="Password"
              placeholder="Replay Youre creating password"
              name="textExample"
              onChange={(event) => {
                const value = event.target.value;
                if (value.length === 0) {
                  setErrorMessagePassword("Cannot be empty!");
                } else {
                  setErrorMessagePassword("");
                  setName(event.target.value);
                }
              }}
            />
            <br />
            <> {errorMessagePassword}</>
          </div>
        </div>
        <div className="text-left">
          <label>Date of Birth :</label>
        </div>
        <div>
          <input type="Date" value="YYYY/MM/DD" name="Date of Birth" />
        </div>
        <button
          className="text-9x1 text-amber-700 bg-grey-300 "
          disabled={
            errorMessageName !== "" ||
            errorMessageEmail !== "" ||
            errorMessagePassword !== ""
          }
        >
          Next
        </button>
      </form>
    </div>
  );
}
