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
        $query = "SELECT * FROM wallet.i_money where username = '$name' and password = '$password'";
        $stmt = $con->prepare($query);
        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if($results){
            $CurrrDatte = date("Y-m-d H:m:s");
            $insertLoginDateQuery = "UPDATE wallet.i_money SET login_datetime = '$CurrrDatte' WHERE username = '$name'";
            $stmtLogin = $con->prepare($insertLoginDateQuery);
            $stmtLogin->execute();
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