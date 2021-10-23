<!-- connect to mysql database server -->
<?php
$servername = "localhost";
$username="root";
$password="";
$dbname="registeration";
$connect=mysqli_connect($servername,$username,$password,$dbname);
if(!$connect){
    die("could not connect to MySql:");
}
?>