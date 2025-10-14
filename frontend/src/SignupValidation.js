function Validation(values) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.name === "") {
    error.name = "name cannot be empty";
  } else {
    error.name = "";
  }

  if (values.email === "") {
    error.email = "email cannot be empty";
  } else if (!email_pattern.test(values.email)) {
    error.email = "email didnt match";
  } else {
    error.email = "";
  }

  if (values.password === "") {
    error.password = "Password cannot be empty";
  } else if (!password_pattern.test(values.password)) {
    error.password =
      "Password needs 8+ chars, with uppercase, lowercase, and a number.";
  } else {
    error.password = "";
  }
  return error;
}

export default Validation;
