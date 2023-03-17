<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
include 'database.php';

if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $data = file_get_contents("php://input");
    $password = null;
    $name = null;
    $name =  $_POST['username'];
    $password =  $_POST['password'];
    if($name &&  $password){
        $query = "UPDATE wallet.i_money SET password = '$password' WHERE username = '$name'";$stmt = $con->prepare($query);
        $stmt = $con->prepare($query);
        $stmt->execute();

        $findChangeQuery = "SELECT * FROM wallet.i_money where username = '$name' and password = '$password'";
        $stmtChange = $con->prepare($findChangeQuery);
        $stmtChange->execute();
        $results = $stmtChange->fetchAll(PDO::FETCH_ASSOC);
        if($results){
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