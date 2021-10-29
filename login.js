//validate login data

function validateEmptyLoginEmail() {
  const userEmail = document.forms['loginForm']['enteredEmail'].value;
  if (userEmail === "" || userEmail === null) {
      document.getElementById("userEmailMsg").innerHTML="**Please enter your email";
      event.preventDefault();
    return false;
  } else{
    return true;
  }
}


function validateEmptyLoginPassword(){
  const userPassword=document.forms['loginForm']['enteredPassword'].value;
  if (userPassword === "" || userPassword === null) {
    document.getElementById("userPasswordMsg").innerHTML="**Please enter your password";
    event.preventDefault();
    return false;
  }else{
      return true;
    }
}
 
function validateAllLogin(){
  validateEmptyLoginEmail();
  validateEmptyLoginPassword();
}
