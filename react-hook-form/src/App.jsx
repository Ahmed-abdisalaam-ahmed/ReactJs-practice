import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  const Password = watch("password")
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username</label>
          <input
            type="text"
            {...register("username", { required: "Username is Required" })}
          />
          {errors.username && (
            <p style={{ color: "red" }}>{errors.username.message}</p>
          )}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            {...register("email", { required: "Email is Required", pattern : {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message : "inValid Email Address"} })}
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>
        {/* Password */}
        <div>
          <label>Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength : {value : 6, message : "password must be 6 characters"}
            })}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </div>
        {/* Confirm password  */}
        <div>
          <label>Confrim Password</label>
          <input
            type="password"
            {...register("confirmPassword", { required: "ConfirmPassword is Required ", validate : (value)=> value === password ||  "Password Don't match "})}
          />
          {errors.confirmPassword && (
            <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
          )}
        </div>
        <div>
          <input
            type="checkbox"
            {...register("terms", { required: "You must agree to the terms" })}
          />
          {errors.terms && (
            <p style={{ color: "red" }}>{errors.terms.message}</p>
          )}
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default App;
