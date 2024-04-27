import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

interface RegisterUser {
  name: string;
  email: string;
  password: string;
}

function RegisterForm() {
  const navigate = useNavigate();
  const registerValidation = Yup.object({
    password: Yup.string()
      .min(6, "required")
      .matches(/[0-9]/, "required number")
      .matches(/[a-z]/, "required a lower case")
      .matches(/[A-Z]/, "required an uppercase"),
    email: Yup.string().email("required"),
    name: Yup.string().required("required"),
  });
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
      name: "",
    },
    validationSchema: registerValidation,
    onSubmit: (values) => {
      handleRegister(values);
    },
  });
  async function handleRegister(credential: RegisterUser) {
    try {
      const body = {
        email: credential.email,
        name: credential.name,
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
        "https://library-crud-sample.vercel.app/api/user/register",
        options
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Failed to regiser");
      } else {
        localStorage.setItem("token", data.token);
        console.log(data);
      }
      navigate("/Login");
    } catch (error) {
      alert(error);
    }
  }
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}
      <button type="submit">Sign Up</button>
    </form>
  );
}
export default RegisterForm;
