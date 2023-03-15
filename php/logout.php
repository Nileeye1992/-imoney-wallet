<?php
    require "database.php";
    if ($_SERVER["REQUEST_METHOD"] == "GET"){
        if($_GET["username"]){
            global $conn;
            $name = $_GET["username"];
            $CurrrDatte = date("Y-m-d H:m:s");
            $Query = "UPDATE user SET logout_datetime = '$CurrrDatte' WHERE username = '$name'";
            $query_run = mysqli_query($conn, $Query);
        }else{
            $data = [
                'status' => 405,
                'message' => $requestMethod. 'Data incomplete',
            ];
            header("HTTP/1.0 405 Method Not Allowed");
            echo json_encode($data);
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