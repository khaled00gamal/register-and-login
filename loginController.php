<?php
session_start();
include("config.php");
if(isset($_POST['submit']))
{
 mysqli_connect('localhost','root','') or die(mysqli_error($connect));
 mysqli_select_db($connect,'registeration') or die(mysqli_error($connect));
 $name=$_POST['name'];
 $pwd=$_POST['pwd'];
 if($name!=''&&$pwd!='')
 {
   $query=mysqli_query($connect,"SELECT * FROM user_entry where email='".$email."' and password='".$password."'") or die(mysqli_error($connect));
   $res=mysqli_fetch_row($query);
   if($res)
   {
    $_SESSION['name']=$name;
    header('location:welcome.php');
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