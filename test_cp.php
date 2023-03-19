
<?PHP
$user = '65gg01tatom888';
$pass = 'Ttom88tt';
$sig = md5($pass.':65gg01');

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://topup-premier888.askmebet.io/v0.1/partner/member/reset-password/587262a34b5896b2a15ee33eda3816ef/65gg01tatom888',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'PUT',
  CURLOPT_POSTFIELDS =>'{
    "password": "'.$pass.'",
    "signature": "'.$sig.'"
}',
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;

?>