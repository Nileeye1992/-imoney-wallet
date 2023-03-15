<?php
    require "database.php";
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $data = file_get_contents("php://input");
        $password = null;
        $name = null;
        $name =  $_POST['username'];
        $password =  $_POST['password'];

        if($name &&  $password){
            global $conn;
            $query = "SELECT * FROM user where username = '$name' and password = '$password'";
            $query_run = mysqli_query($conn, $query);
            $c = 0;
            while ($row = mysqli_fetch_assoc($query_run))
            {
                $c++;
            }
            if($c > 0){
                $CurrrDatte = date("Y-m-d H:m:s");
                $insertLoginDateQuery = "UPDATE user SET login_datetime = '$CurrrDatte' WHERE username = '$name'";
                $query_run = mysqli_query($conn, $insertLoginDateQuery);
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

        // echo $password." |  ". $name;

    }else{
        $data = [
            'status' => 405,
            'message' => $requestMethod. 'Method Not Allowed',
        ];
        header("HTTP/1.0 405 Method Not Allowed");
        echo json_encode($data);
    }
?>