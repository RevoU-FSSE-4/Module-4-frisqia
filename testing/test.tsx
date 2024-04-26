import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const isLogin = localStorage.getItem("isLogin") === "true";
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;

// File App

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import NavigationComponent from "./NavigationComponent";
import PrivateRoute from "./PrivateRoute";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
    </>
  );
};

const About = () => {
  return (
    <>
      <h1>About</h1>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <h1>Contact</h1>
    </>
  );
};

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");

  function onSubmit() {
    localStorage.setItem("isLogin", "true");
    localStorage.setItem("Username", username);
    navigate("/dashboard");
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <label> Username </label>
        <input
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        />
        <br />
        <label> Password </label>
        <input name="password" type="password" />
        <br />
        <button> Submit </button>
      </form>
    </>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();

  function logout() {
    //localStorage.setItem('isLogin', 'false');
    localStorage.clear();
    navigate("/");
  }

  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={logout}> Logout</button>
    </>
  );
};

const Profile = () => {
  let username = localStorage.getItem("Username");
  return (
    <>
      <h1>Profile</h1>
      <br />
      <h1>Hello, {username} !</h1>
    </>
  );
};

const NotFound = () => {
  return (
    <>
      <h1>Not Found</h1>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Revou Library</h1>
      <NavigationComponent />
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

// live coding
function Home() {
  const [toogle, setToogle] = useState(false);

  return (
    <>
      <h1>Home</h1>
      <ChildComponent num={1} />
      <button onClick={() => setToogle(!toogle)}>{toogle.toString()}</button>
    </>
  );
}

export default Home;

function ChildComponent(props: { num: number }) {
  const num = props.num;

  function expensive(num: number) {
    console.log("running expensive function!");
    return num + num;
  }

  const result = useMemo(() => expensive(num), [num]);
  return <h1> {result}</h1>;
}

// API
// Article Reference: https://dev.to/duhbhavesh/how-to-use-fetch-api-for-crud-operations-57a0

// Example using API Post:
try {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    }),
  };

  const response = await fetch(
    "https://library-crud-sample.vercel.app/api/user/register",
    options
  );
  // handle kalo error harus ngapain
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  console.log(data);

  // next move
  setTimeout(() => {
    alert("Register Success");
    navigate("/login");
  }, 1000);
} catch (error) {
  console.error("Error:", error);
}

// 1. Tentuin dulu value yang mau di share lalu buat contextnya
export const MyContext = createContext<string>("");

// 2. Buat Providernya
export const Provider = (props: { children: any }) => {
  const sharedValue = "Hello from Context";
  return (
    <MyContext.Provider value={sharedValue}>
      {props.children}
    </MyContext.Provider>
  );
};

// 3. Pakai di komponent yang diinginkan pake useContext
const ChildComponent = () => {
  const sharedValue = useContext(MyContext);
  return (
    <div>
      <> {sharedValue} </>
    </div>
  );
};

// Live Code Spill Tugas

useEffect(() => {
  async function getProfile() {
    const token = localStorage.getItem("token");

    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: {},
    };

    try {
      const response = await fetch(
        "https://library-crud-sample.vercel.app/api/user/profile",
        options
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      console.log(jsonData);
      setResponse(JSON.stringify(jsonData));
    } catch (error) {
      console.error("Error:", error);
    }
  }

  getProfile();
}, []);

async function logout(e: any) {
  e.preventDefault();
  const token = localStorage.getItem("token");
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };

  try {
    const response = await fetch(
      "https://library-crud-sample.vercel.app/api/user/logout",
      options
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data.token);

    // NEXT MOVE
  } catch (error) {
    console.error("Error:", error);
  }
}

///Local Storage
// Storing data in Local Storage
localStorage.setItem("username", "John");
localStorage.setItem("isLoggedIn", "true");

localStorage.setItem("key", "value");
("key");
("value");

// Retrieving data from Local Storage
const username = localStorage.getItem("username");
const isLoggedIn = localStorage.getItem("isLoggedIn");

console.log(username); // Output: "John"
console.log(isLoggedIn); // Output: "true"

// Removing an item from Local Storage
localStorage.removeItem("isLoggedIn");

// Clearing all data from Local Storage
localStorage.clear();

///Session Storage
// Storing data in Session Storage
sessionStorage.setItem("language", "English");
sessionStorage.setItem("theme", "dark");

// Retrieving data from Session Storage
const language = sessionStorage.getItem("language");
const theme = sessionStorage.getItem("theme");

console.log(language); // Output: "English"
console.log(theme); // Output: "dark"

// Removing an item from Session Storage
sessionStorage.removeItem("theme");

// Clearing all data from Session Storage
sessionStorage.clear();

///Cookies
// Setting a cookie
document.cookie =
  "username=John Doe; expires=Thu, 15 Jun 2023 12:00:00 UTC; path=/";

// Retrieving a cookie
const cookies = document.cookie;
console.log(cookies); // Output: "username=John Doe; otherCookie=value"

// Retrieving a specific cookie
function getCookie(name) {
  const cookieString = document.cookie;
  const cookies = cookieString.split("; ");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("=");
    if (cookie[0] === name) {
      return cookie[1];
    }
  }

  return null;
}

const username = getCookie("username");
console.log(username); // Output: "John Doe"
