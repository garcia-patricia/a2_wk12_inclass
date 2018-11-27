<?php 
// this is like controller in MVC

// you never see this index.php file, just passing info between functions and connect
    include 'functions.php';

    //single movie route
    if (isset($_GET["movie"])){
        $data = get_single_video($conn, $_GET["movie"]);
        echo json_encode($data);
    } else {
        $data = get_all_videos($conn);
        echo json_encode($data);
    }
?>