function Validation(values) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^.{6,}$/;

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
    error.password = "Password didnt match";
  } else {
    error.password = "";
  }
  return error;
}

export default Validation;
