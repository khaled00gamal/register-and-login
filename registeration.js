const u_name = document.getElementById("name").value;
const u_email = document.getElementById("email").value;
const u_password = document.getElementById("password").value;
const u_password2 = document.getElementById("password2").value;

function validateEmpty() {
  if (u_name == "" || u_name == null) {
    document.getElementById("username-message").innerHTML =
      "**Username field cant be empty";
    return false;
  } else if (u_email == "" || u_email == null) {
    document.getElementById("email-message").innerHTML =
      "**Email field cant be empty";
    return false;
  } else if (u_password == "" || u_password == null) {
    document.getElementById("password-message").innerHTML =
      "**Password field cant be empty";
    return false;
  } else if (u_password2 == "" || u_password2 == null) {
    document.getElementById("password2-message").innerHTML =
      "**Password field cant be empty";
    return false;
  } else {
    return true;
  }
}

function validatePasswords() {
  if (u_password != u_password2) {
    document.getElementById("password2-message").innerHTML =
      "**Passwords must match";
    return false;
  } else if (u_password.length < 8) {
    document.getElementById("password-message").innerHTML =
      "**Password length must be atleast 8 characters";
    return false;
  } else {
    return true;
  }
}

function validateEmailDatabase() {
  $(document).ready(function () {
    //newly added
    $("#Submit").click(function () {
      alert("in");
      let emailVal = $("#email").val();
      $.post(
        "registerationController.php",
        { email: emailVal },
        function (data) {
          if (data == "exist") return true;
          else {
            document
              .getElementById("email-message")
              .innerHTML("**This Email already exists");
            return false;
          }
        }
      );
    });
  });
}

function validateEmailFormat(u_email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(u_email)) {
    return true;
  } else {
    document.getElementById("email-message").innerHTML = "**Wrong email format";
    //alert("wrong email format");
    return false;
  }
}


function validateAll() {
  validateEmpty();
  validateEmailFormat();
  validateEmailDatabase();
  validatePasswords();
  console.log("lolllllll");
}
