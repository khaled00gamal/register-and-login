<?php
session_start();
include("../config.php");
if(isset($_POST['submit']))
{
 mysqli_connect('localhost','root','') or die(mysqli_error($connect));
 mysqli_select_db($connect,'registeration') or die(mysqli_error($connect));
 $email=$_POST['enteredEmail'];
 $password=$_POST['enteredPassword'];
 if($email!=''&&$password!='')
 {
   $query="SELECT * FROM user_entry where email='$email' and password='$password'" ;
   $res=mysqli_query($connection,$query);
   if(mysqli_fetch_row($res))
   {
    $_SESSION['name']=$name;
    header ("Location: ../views/welcome.php?status=success");
   }
   else
   {
    echo'The entered username or password are incorrect';
   }
 }
 else
 {
  echo'Enter both username and password';
 }
}
?>