const u_name = document.getElementById("name").value;
const u_email = document.getElementById("email").value;
const u_password = document.getElementById("password").value;
const u_password2 = document.getElementById("password2").value;


function validatePasswords() {
  if (u_password != u_password2) {
    alert("passwords must be the same");
    return false;
  } else if (u_password.length<8) {
    document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
    return false;  
  }else{
    return true;
  }
  
}

// function validateEmail() {
//   //todo: is email in db ? error : continue
//   return true;
// }

function validateEmailFormat(u_email){
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!re.test(u_email)){
  return true;
  }else{
    alert("wrong email format");
    return false;
  }
}


function validateAll() {
  // validateEmail();
  validateEmailFormat();
  validatePasswords();
  console.log("lolllllll");
}
