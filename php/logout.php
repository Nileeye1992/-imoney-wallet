<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
include 'database.php';

if ($_SERVER["REQUEST_METHOD"] == "GET"){
    if($_GET["username"]){
        global $conn;
        $name = $_GET["username"];
        $CurrrDatte = date("Y-m-d H:m:s");
        $Query = "UPDATE wallet.i_money SET logout_datetime = '$CurrrDatte' WHERE username = '$name'";
        $stmt = $con->prepare($Query);
        $stmt->execute();
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