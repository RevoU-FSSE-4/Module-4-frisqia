import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

interface LoginPageForm {
  fullname: "";
  password: string;
  email: string;
  dob: string;
}

function LoginPage() {
  const [credential, setCredential] = useState<LoginPageForm>({
    fullname: "",
    password: "",
    email: "",
    dob: "",
  });

  const navigate = useNavigate();
  function handleChange(key: string, value: string) {
    setCredential((oldCredential) => ({ ...oldCredential, [key]: value }));
  }
  function ChangePage(target: string) {
    navigate(target);
  }
  async function handleRegister(target: string) {
    try {
      const body = {
        fullname: credential.fullname,
        email: credential.email,
        password: credential.password,
        dob: credential.dob,
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      };
      const response = await fetch(
        "https://library-crud-sample.vercel.app/api/user/profile",
        options
      );
      const data = await response.json();
      console.log(data);
    } catch (eror) {}
  }
  return (
    <>
      <label htmlFor="fullname">Name : </label>
      <input
        type="text"
        id="name"
        placeholder="input your name"
        value={credential.fullname}
        onChange={(e) => handleChange("fullname", e.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        placeholder="Input Your Email"
        value={credential.email}
        onChange={(e) => handleChange("email", e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Create Pasword"
        value={credential.password}
        onChange={(e) => handleChange("password", e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Replay your create Password"
        value={credential.password}
        onChange={(e) => handleChange("password", e.target.value)}
      />
      <button>Login</button>
      <button>Go to Quote Page</button>
    </>
  );
}
export default LoginPage;
