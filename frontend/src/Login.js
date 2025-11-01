import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./LoginValidation";
import axios from "axios";


function Login() {
  const [values, setvalues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
const navigate = useNavigate();

  const handleInput = (event) => {
    setvalues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(Validation(values));
    if (
      validationErrors.email === "" &&
      validationErrors.password === ""
    ) {
      axios
        .post("http://localhost:8081/login", values)
        .then((res) => {
          if (res.data === "Success") {
              navigate("/home")            
          } else {
            alert("No Data Exists.")
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100 ">
      <div className="bg-white rounded p-3 w-25">
        <h2>Sign-In</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="emai;">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control rounded-0 left-0"
              onChange={handleInput}
              name="email"
            />
            {errors.email && (
              <span className="text-danger"> {errors.email} </span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control rounded-0"
              onChange={handleInput}
              name="password"
            />
            {errors.password && (
              <span className="text-danger"> {errors.password} </span>
            )}
          </div>
          <button type="submit" className="btn btn-success w-100">
            <strong>Log In</strong>
          </button>
          <p className="text-center">You agree to our terms and policies.</p>
          <Link
            to="/signup"
            className="btn btn-light w-100 border text-decoration-none"
          >
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
