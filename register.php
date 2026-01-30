<?php
include "db.php";

$data = json_decode(file_get_contents("php://input"), true);

$user = $data['username'];
$email = $data['email'];
$pass = password_hash($data['password'], PASSWORD_DEFAULT);

mysqli_query($conn,"INSERT INTO users(username,email,password) VALUES('$user','$email','$pass')");
echo "ok";
?>
