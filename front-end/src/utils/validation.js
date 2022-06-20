const validation = (formValues) => {
  let errors = {};
  const regex = /\S+@\S+\.\S+/;

  if (!formValues.first_name) {
    errors.first_name = "First name is required.";
  }
  if (!formValues.last_name) {
    errors.last_name = "Last name is required.";
  }
  if (!formValues.email) {
    errors.email = "Email is required.";
  } else if (regex.test(formValues.email) === false) {
    errors.email = "Email is invalid.";
  }
  if (!formValues.password) {
    errors.password = "Password is required";
  } else if (formValues.password.length < 5) {
    errors.password = "Password length must be more than 5 characters";
  }
  return errors;
};

export default validation;
