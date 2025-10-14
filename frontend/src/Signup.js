import React, { useState } from "react";
import { Link } from "react-router-dom";
import Validation from "./SignupValidation";

function Signup() {
  const [values, setvalues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setvalues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100 ">
      <div className="bg-white rounded p-3 w-25">
        <h2>Sign-Up</h2>

        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Full Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="form-control rounded-0 left-0"
              name="name"
              onChange={handleInput}
            />
            {errors.name && (
              <span className="text-danger"> {errors.name} </span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="emai;">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control rounded-0 left-0"
              name="email"
              onChange={handleInput}
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
              name="password"
              onChange={handleInput}
            />
            {errors.password && (
              <span className="text-danger"> {errors.password} </span>
            )}
          </div>
          <button type="submit" className="btn btn-success w-100">
            <strong>Sign Up</strong>
          </button>
          <p className="text-center">You agree to our terms and policies.</p>
          <Link
            to="/"
            className="btn btn-light w-100 border text-decoration-none"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
