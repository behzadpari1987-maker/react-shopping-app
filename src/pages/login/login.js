import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

export const Login = () => {

  const navigate = useNavigate();

  const schema = yup.object().shape({

    email: yup
      .string()
      .email("Invalid email")
      .required("Email is required"),

    password: yup
      .string()
      .required("Password is required"),

  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  const onFormSubmit = (data) => {

    const savedUser = JSON.parse(
      localStorage.getItem("user")
    );

    if (!savedUser) {
      console.log("No user found");
      return;
    }


    if (
      data.email === savedUser.email &&
      data.password === savedUser.password
    ) {

      localStorage.setItem(
        "isLoggedIn",
        "true"
      );
      window.dispatchEvent(new Event("login"));

      console.log("Login successful");

      navigate("/profile");

    } else {

      console.log("Invalid email or password");

    }
  };


  return (
    <div className="container mt-4">
  <div className="card shadow p-4 mx-auto" style={{ maxWidth: "450px" }}>
 

      <h2>Login</h2>

      <form onSubmit={handleSubmit(onFormSubmit)}>

        <div className="mb-3">

          <label>Email</label>

          <input
            type="email"
            className="form-control"
            {...register("email")}
          />

          {errors.email && (
            <p className="text-danger">
              {errors.email.message}
            </p>
          )}

        </div>


        <div className="mb-3">

          <label>Password</label>

          <input
            type="password"
            className="form-control"
            {...register("password")}
          />

          {errors.password && (
            <p className="text-danger">
              {errors.password.message}
            </p>
          )}

        </div>


        <button
          type="submit"
          className="btn btn-primary"
        >
          Login
        </button>

      </form>
 </div>
    </div>
  );
};