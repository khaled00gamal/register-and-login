function validateEmptyName() {
  //works
  const u_name = document.forms["regForm"]["name"].value;
  if (u_name === "" || u_name === null) {
    document.getElementById("username-message").innerHTML =
      "**Username field cant be empty";
    event.preventDefault();
    return false;
  }
  return true;
}

function validateEmptyEmail() {
  const u_email = document.forms["regForm"]["email"].value;
  if (u_email === "" || u_email === null) {
    document.getElementById("email-message").innerHTML =
      "**Email field cant be empty";
    event.preventDefault();
    return false;
  }
  return true;
}

function validateEmptyPassword() {
  const u_password = document.forms["regForm"]["password"].value;

  if (u_password === "" || u_password === null) {
    document.getElementById("password-message").innerHTML =
      "**Password field cant be empty";
    event.preventDefault();
    return false;
  }
  return true;
}

function validateEmptyPassword2() {
  const u_password2 = document.forms["regForm"]["password2"].value;

  if (u_password2 === "" || u_password2 === null) {
    document.getElementById("password2-message").innerHTML =
      "**Please confirm your password";
    event.preventDefault();
    return false;
  }
  return true;
}

function validatePasswordsMatch() {
  //works
  const u_password2 = document.forms["regForm"]["password2"].value;
  const u_password = document.forms["regForm"]["password"].value;

  if (u_password != u_password2) {
    document.getElementById("password2-message").innerHTML =
      "**Passwords must match";
    event.preventDefault();
    return false;
  }
  return true;
}

function validateEmailFormat() {
  const u_email = document.forms["regForm"]["email"].value;

  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(u_email)) {
    document.getElementById("email-message").innerHTML = "**Wrong email format";
    event.preventDefault();
    return false;
  } else {
    return true;
  }
}

function validateAll() {
  validateEmptyName();
  validateEmptyEmail();
  validateEmptyPassword();
  validateEmptyPassword2();
  validatePasswordsMatch();
  validateEmailFormat();
}
