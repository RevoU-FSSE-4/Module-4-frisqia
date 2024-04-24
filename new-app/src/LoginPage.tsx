import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

interface LoginPageForm {
  password: string;
  email: string;
}

function LoginPage() {
  const [credential, setCredential] = useState<LoginPageForm>({
    password: "",
    email: "",
  });
  const navigate = useNavigate();
  function handleChange(key: string, value: string) {
    setCredential((oldCredential) => ({ ...oldCredential, [key]: value }));
  }
  function ChangePage(target: string) {
    navigate(target);
  }
  async function handleRegister(terget: string) {
    try {
      const body = {
        email: credential.email,
        password: credential.password,
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      };
      const response = await fetch(
        "https://documenter.getpostman.com/view/15804286/2sA3Bn6CSh",
        options
      );
      const data = await response.json();
      console.log(data);
    } catch (eror) {}
  }
  return (
    <>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        value={credential.email}
        onChange={(e) => handleChange("email", e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={credential.password}
        onChange={(e) => handleChange("password", e.target.value)}
      />
      <button>Login</button>
      <button>Go to Quote Page</button>
    </>
  );
}
export default LoginPage;
