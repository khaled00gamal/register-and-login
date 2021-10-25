//validate login data
const userEmail = document.getElementById("enteredEmail").value;
const userPassword = document.getElementById("enteredPassword").value;

function validateEmptyLogin() {
  if (userEmail == "" || userEmail == null) {
      document.getElementById("userEmailMsg").innerHTML("**Please enter your email");
    return false;
  } else if (userPassword == "" || userPassword == null) {
    document.getElementById("userPasswordMsg").innerHTML("**Please enter your password");
    return false;
  }else{
      return true;
    }
}
