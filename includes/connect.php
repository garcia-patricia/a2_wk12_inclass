<?php 

$user = "root";
$pw = "root";

try {
    $conn = new PDO('mysql:host=localhost;dbname=vue_video', $user, $pw);
   // var_dump($conn);
 } catch (PDOException $exception){
     echo 'connection error' . $exception->getMessage();
 }
?>