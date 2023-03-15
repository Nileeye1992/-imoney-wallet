<?php
    require "database.php";
    if ($_SERVER["REQUEST_METHOD"] == "POST"){
        $data = file_get_contents("php://input");
        $password = null;
        $name = null;
        $name =  $_POST['username'];
        $password =  $_POST['password'];
        if($name &&  $password){
            $query = "UPDATE user SET password = '$password' WHERE username = '$name'";
            $query_run = mysqli_query($conn, $query);

            $findChangeQuery =  "SELECT * FROM user where username = '$name' and password = '$password'";
            $query_find_run = mysqli_query($conn, $findChangeQuery);
            $c = 0;
            while ($row = mysqli_fetch_assoc($query_find_run))
            {
                $c++;
            }
            if($c > 0){
                echo 1;
            }else{
                echo 0;
            }
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