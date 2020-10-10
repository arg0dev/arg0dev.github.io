<?php

echo "<meta http-equiv='refresh' content='0;url=/index.html'>";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer();


$mail->isSMTP();
$mail->SMTPKeepAlive = true;
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'tls'; //ssl
$mail->CharSet = 'UTF-8';
$mail->Port = 587; //25 , 465 , 587
$mail->Host = "smtp.gmail.com";

$mail->Username = "noreplyarg0dev@gmail.com";
$mail->Password = "N0P455W0RD";


$mail->setFrom("noreplyarg0dev@gmail.com");
$mail->addAddress("arg0creative34@gmail.com");

$body = file_get_contents('./process.html');

$gelen = ["{{ARRAY1}}","{{ARRAY2}}","{{ARRAY3}}","{{ARRAY4}}"];
$giden = [$_POST['nameSurname'],$_POST['mail'],$_POST['subject'],$_POST['message']];

$body = str_replace($gelen,$giden,$body);

$mail->isHTML(true);
$mail->Subject = "arg0dev Customer Service";
$mail->Body = $body;

if ($mail->send())
    echo '<script>alert("We have received your message. Our customer support team will evaluate your request in a short time. We thank you.")</script>';
else
    echo '<script>alert("Your message could not be sent. Please try again later.")</script>';

?>