import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

export const Register = () => {

  const navigate = useNavigate();

  const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),

    lastName: yup.string().required("Last name is required"),

    email: yup
      .string()
      .email("Invalid email")
      .required("Email is required"),

   password: yup
  .string()
  .min(4, "Password must be at least 4 characters")
  .max(15, "Password must be maximum 15 characters")
  .matches(/[a-z]/, "Password must contain a lowercase letter")
  .matches(/[A-Z]/, "Password must contain an uppercase letter")
  .matches(/\d/, "Password must contain a number")
  .required("Password is required"),

confirmPassword: yup
  .string()
  .oneOf(
    [yup.ref("password")],
    "Passwords do not match"
  )
  .required("Please confirm your password"),

});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onFormSubmit = (data) => {

    localStorage.setItem(
      "user",
      JSON.stringify(data)
    );

    console.log("User saved successfully");

    navigate("/login");
  };

  return (
    <div className="container mt-4">
  <div className="card shadow p-4 mx-auto" style={{ maxWidth: "450px" }}>





      <h2>Register</h2>

      <form onSubmit={handleSubmit(onFormSubmit)}>

        <div className="mb-3">
          <label>First Name</label>

          <input
            type="text"
            className="form-control"
            {...register("firstName")}
          />

          {errors.firstName && (
            <p className="text-danger">
              {errors.firstName.message}
            </p>
          )}
        </div>


        <div className="mb-3">
          <label>Last Name</label>

          <input
            type="text"
            className="form-control"
            {...register("lastName")}
          />

          {errors.lastName && (
            <p className="text-danger">
              {errors.lastName.message}
            </p>
          )}
        </div>


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


        <div className="mb-3">
          <label>Confirm Password</label>

          <input
            type="password"
            className="form-control"
            {...register("confirmPassword")}
          />

          {errors.confirmPassword && (
            <p className="text-danger">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>


        <button
          type="submit"
          className="btn btn-primary"
        >
          Register
        </button>

      </form>
</div>
    </div>
  );
};