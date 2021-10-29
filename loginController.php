<?php
session_start();
include("../config.php");

if(isset($_POST['submit']))
{
 $email=$_POST['enteredEmail'];
 $pass=$_POST['enteredPassword'];
 $hash=md5($pass);

 $query="SELECT * FROM user_entry where (email='$email' and pass='$hash')" ;
 $res=mysqli_query($connection,$query);
   
   if(mysqli_fetch_row($res))
   {
     $data=mysqli_fetch_assoc($res);//get data row as array
     if($data['pass']===$hash){
      echo"dakhalt";
      $_SESSION['name']=$data['name'];
      header ("Location: ../views/welcome.php?status=success");
     }
   }
   else
   {
     echo "madakhaltesh";
    $login_err = "Invalid username or password.";
   }
 }
 
?>