<?php
$database = 'ipmapp';
$user = 'ipmapp';
$password = 'iPMA44';
$host = 'mysql';
$con = mysqli_connect($host,$user,$password,$database);

if (mysqli_connect_errno()) {
 echo 'Could not connect to MySQL' . mysqli_connect_error();
}

$var = array();
$sql = "SELECT * FROM plants";
$result = mysqli_query($con, $sql);

while($obj = mysqli_fetch_object($result)) {
$var[] = $obj;
}
echo json_encode($var);

mysqli_close($con);
?>