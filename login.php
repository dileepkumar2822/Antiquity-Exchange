<?php
include "db.php";

$data = json_decode(file_get_contents("php://input"), true);

$email = $data['email'];
$pass = $data['password'];

$res = mysqli_query($conn,"SELECT * FROM users WHERE email='$email'");
$user = mysqli_fetch_assoc($res);

if($user && password_verify($pass,$user['password'])){
    echo json_encode($user);
}else{
    echo "invalid";
}
?>
