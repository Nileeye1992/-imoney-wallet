<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

if ($_SERVER["REQUEST_METHOD"] == "GET"){
    if($_GET["username"]){
        $curl = curl_init();
        $username = $_GET["username"];
        $urlWithUser = ("https://topup-premier888.askmebet.io/v0.1/partner/member/credit/587262a34b5896b2a15ee33eda3816ef/".$urlWithUser);
        
        curl_setopt_array($curl, array(
            CURLOPT_URL => $urlWithUser,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
            CURLOPT_POSTFIELDS =>'{
          
          }',
            CURLOPT_HTTPHEADER => array(
              'Content-Type: application/json'
            ),
          ));
          $response = curl_exec($curl);

          curl_close($curl);
          echo $response;
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