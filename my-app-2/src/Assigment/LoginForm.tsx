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
      .min(6, "required")
      .matches(/[0-9]/, "required number")
      .matches(/[a-z]/, "required a lower case")
      .matches(/[A-Z]/, "required an uppercase"),
    email: Yup.string().required("required"),
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
    <form onSubmit={formik.handleSubmit}>
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
      <button type="submit">Submit</button>
    </form>
  );
}
export default LoginForm;

//usestate
//useefect
