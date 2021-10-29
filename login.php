<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Log in</title>
    <link rel="stylesheet" href="styles.css">
    <script  type="text/javascript" src="../login.js"></script>
</head>
<body>
<div id="register-box">

<h1>Sign in</h1>
<form name="loginForm" class="inner" method="post" onsubmit="return validateAllLogin()"  action="../controllers/loginController.php">
    
    <?php 
        if(!empty($login_err)){
            echo '<div style="color:red"">' . $login_err . '</div>';
        }   
        
        ?>
    <input type="text" name="enteredEmail" placeholder="E-mail" />
    <span id = "userEmailMsg" style="color:red"> </span>
    <input type="password" name="enteredPassword" placeholder="Password" />
    <span id = "userPasswordMsg" style="color:red"> </span>
    <br>
   <input type="submit" class="btn" value="LOG IN">
   <p>Don't have an account? <a href="registeration.php">Sign up now</a>

</form>

</div>


</body>
</html>