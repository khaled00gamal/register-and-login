<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>register</title>
    <link rel="stylesheet" href="styles.css">
    
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
</head>


<body>
    <div id="register-box">

        <h1>Sign up</h1>
        <?php 
        if(!empty($email_err)){
            echo '<div style="color:red"">' . $email_err . '</div>';
        }        
        ?>
        <form name="regForm" class="inner" onsubmit="return validateAll()" action="../controllers/registerationController.php" method="post">
            <input type="text" name='name' placeholder="Username"/>
            <span id = "username-message" style="color:red"> </span>
            <input type="text" name='email' placeholder="E-mail"/>
            <span id = "email-message" style="color:red"> </span>
            <input type="password" name='password' placeholder="Password"/>
            <span id = "password-message" style="color:red"> </span>
            <input type="password" name='password2' placeholder="Confirm password"/>
            <span id = "password2-message" style="color:red"> </span>
            <br>

            <input type="submit" class="btn" value="SIGN ME UP"">
            <div class="text-center">Already have an account? <a href="login.php">Sign in</a></div>
        </form>

    </div>
    <script  src="../registeration.js"></script>
</body>

</html>




