// LoginForm.jsx
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

interface RegisterUser {
  email: string;
  password: string;
}

function LoginForm() {
  const navigation = useNavigate();
  const loginValid = Yup.object({
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validationSchema: loginValid,
    onSubmit: (values) => {
      handleLogin(values);
    },
  });
  async function handleLogin(credential: RegisterUser) {
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
        "https://library-crud-sample.vercel.app/api/user/login",
        options
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(
          "Failed to login, Maybe your email or password not matched"
        );
      } else {
        localStorage.setItem("token", data.token);
        console.log(data);
      }
      navigation("/Dashboard");
    } catch (error) {
      alert(error);
    }
  }
  return (
    <form onSubmit={formik.handleSubmit} className="max-w-sm mx-auto mt-8">
      <label htmlFor="email" className="block mb-2">
        Email
      </label>
      <input
        type="text"
        id="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="text-red-500">{formik.errors.email}</div>
      ) : null}
      <label htmlFor="password" className="block mb-2">
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
      />
      {formik.touched.password && formik.errors.password ? (
        <div className="text-red-500">{formik.errors.password}</div>
      ) : null}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}
export default LoginForm;
