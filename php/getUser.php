<?php
    require "database.php";
    if ($_SERVER["REQUEST_METHOD"] == "GET"){
        if($_GET["username"]){
            global $conn;
            $name = $_GET["username"];
            $query = "SELECT * FROM user where username = '$name'";
            $query_run = mysqli_query($conn, $query);
            $stuff = null;
            while($row = mysqli_fetch_assoc($query_run)){
                $stuff = array('username' =>  $row['username'] , 'password' => $row['password'], 'balance' => $row['balance']);
            }
            echo json_encode($stuff);
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