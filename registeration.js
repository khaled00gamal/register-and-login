const u_name = document.getElementById("name").value;
const u_email = document.getElementById("email").value;
const u_password = document.getElementById("password").value;
const u_password2 = document.getElementById("password2").value;

function validateEmpty() {
  if (u_name == null || u_name == "") {
    alert("name field cant be empty");
    return false;
  } else if (u_email == null || u_email == "") {
    alert("email field cant be empty");
    return false;
  } else if (u_password == null || u_password == "") {
    alert("password field cant be empty");
    return false;
  } else if (u_password2 == null || u_password2 == "") {
    alert("please confirm your password");
    return false;
  } else {
    return true;
  }
}

function validatePasswords() {
  if (u_password != u_password2) {
    alert("passwords must be the same");
    return false;
  } else {
    return true;
  }
}

function validateEmail() {
  //todo: is email in db ? error : continue
  return true;
}

function validateEmailFormat(u_email){
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(u_email);
}

function validateAll() {
  validateEmpty();
  validateEmail();
  validateEmailFormat();
  validatePasswords();
}
