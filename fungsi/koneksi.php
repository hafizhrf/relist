<?php 
$host = "localhost";
$user = "root";
$pass = "";
$db = "xirpla1718_28_161710342_randywardhana_smtgenap";

$koneksi = mysqli_connect($host,$user,$pass,$db);
if(!$koneksi){
	echo "<script>alert('Connecting Failure [Unknown Database]')</script>";
}
?>