import React, { useState } from "react";
import validation from "../utils/validation";

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(formValues));
  };

  return (
    <div className="container w-50 mt-5">
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <hr></hr>
        <div className="form-group">
          <label for="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="form-control mb-2"
            value={formValues.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <p className="text-danger">{errors.firstName}</p>
          )}
        </div>
        <div className="form-group">
          <label for="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="form-control mb-2"
            value={formValues.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p className="text-danger">{errors.lastName}</p>}
        </div>
        <div className="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control mb-2"
            value={formValues.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-danger">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control mb-2"
            value={formValues.password}
            onChange={handleChange}
          />
          {errors.password && <p className="text-danger">{errors.password}</p>}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
