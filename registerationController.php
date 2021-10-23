<?php
extract($_POST);
include("config.php");
$sql=mysqli_query($connect,"SELECT * FROM user_entry where email='$email'");
if(mysqli_num_rows($sql)>0){
    echo"email already exists";
    exit;
}else(isset($_POST['save'])){
    $query="INSERT INTO user_entry(name,email, password) VALUES ('$name','$email', 'md5($password)')";
        $sql=mysqli_query($connect,$query)or die(mysqli_error($connect));
        header ("Location: login.php?status=success");
}
?>