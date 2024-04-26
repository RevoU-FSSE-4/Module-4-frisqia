import { useState } from "react";

export default function MyPageTwo() {
  const [name, setName] = useState<string>("");
  const [errorMessageName, setErrorMessageName] = useState<string>("");
  const [errorMessageEmail, setErrorMessageEmail] = useState<string>("");
  const [errorMessagePassword, setErrorMessagePassword] = useState<string>("");

  function handleSubmit(event: any) {
    event.preventDefault(); //agar tidak ke reload
    //const formData = new FormData(event.target);
    alert(name);
    // console.log(formData.get("textExample"));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama: </label>
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
          <> {errorMessageName}</>{" "}
        </div>
        {/* <button disabled={name.length < 3}>Click me</button> */}
        <div>
          <label>Email: </label>
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

        <div>
          <label>Password</label>
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
        </div>
        <div>
          <label>Password</label>
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
        <button
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
