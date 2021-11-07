<?php
//works
include("../config.php");


$name=$_POST['name'];
$email = $_POST['email'];
$pass = $_POST['password'];
$hashed=md5($pass);

$sql="SELECT * FROM user_entry where email='$email'";
$res = mysqli_query($connect, $sql);
if(mysqli_num_rows($res)>0){
    echo "<script>alert('email already exists')</script>";
    exit;
}else{
    $query="INSERT INTO user_entry (name,email, pass) VALUES ('$name','$email', '$hashed')";
        
    if (mysqli_query($connect, $query)) {
        echo "New inserted";
        header ("Location: ../views/login.php?status=success");
    } else {
        echo "error" . mysqli_error($connect);
    }
}
?>


