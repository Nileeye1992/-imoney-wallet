<?php
    require "database.php";
    global $conn;
    $query = "SELECT * FROM user";
    $query_run = mysqli_query($conn, $query);
    if($query_run){
        foreach($query_run as  $result) {
            echo ' Per room amount:  '.$result["username"];
        }
    }else{
        $data = [
            'status' => 405,
            'message' => $requestMethod. 'Method Not Allowed',
        ];
        header("HTTP/1.0 405 Method Not Allowed");
        echo json_encode($data);
    }

?>