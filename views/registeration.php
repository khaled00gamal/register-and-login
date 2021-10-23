<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>register</title>
    <link rel="stylesheet" href="styles.css">
    <script src="registeration.js"></script>
</head>


<body>
    <div id="register-box">

        <h1>Sign up</h1>
        <form action="signin.php" class="inner" method="post" onsubmit="return validateAll()">
            <input type="text" id="name" placeholder="Username" />
            <input type="text" id="email" placeholder="E-mail" />
            <input type="password" id="password" placeholder="Password" />
            <input type="password" id="password2" placeholder="Confirm password" />

            <button type="submit" class="btn" >SIGN ME UP</button>
            <div class="text-center">Already have an account? <a href="signin.php">Sign in</a></div>
        </form>

    </div>
</body>

</html>