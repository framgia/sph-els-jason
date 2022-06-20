import React, { useState } from "react";
import { instance } from "../components/Axios";
import validation from "../utils/validation";

const SignUp = () => {
  const initialState = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState({
    initialState,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validation(formValues));

    let res = await instance.post("register", formValues);

    if (res.request.status === 200) {
      setFormValues(initialState);
    }
  };

  return (
    <div className="container w-50 mt-5">
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <hr></hr>
        <div className="form-group">
          <label for="first-name">First Name</label>
          <input
            type="text"
            name="first_name"
            id="first-name"
            className="form-control mb-2"
            value={formValues.first_name}
            onChange={handleChange}
          />
          {errors.first_name && (
            <p className="text-danger">{errors.first_name}</p>
          )}
        </div>
        <div className="form-group">
          <label for="last-name">Last Name</label>
          <input
            type="text"
            name="last_name"
            id="last-name"
            className="form-control mb-2"
            value={formValues.last_name}
            onChange={handleChange}
          />
          {errors.last_name && (
            <p className="text-danger">{errors.last_name}</p>
          )}
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
