<?php
    session_start();
    
    $username=$_POST["email"];
    $passcode=$_POST["pass"];

   
    //$server_url= "https://fortunate-versed-clematis.glitch.me/auth?username=$username&passcode=$passcode";
    $server_url="http://localhost:3000/auth?username=$username&passcode=$passcode";
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
    curl_setopt($ch, CURLOPT_URL, $server_url); 
  
    $response_ = curl_exec($ch); 

    if( $response_=='SUCCESS' ) {
        $_SESSION['auth']= 'true';
        header("Location: ./index.php");
    }
    else{
        $_SESSION['auth']= 'false';
        if( $response_=='FAIL' ) {
            $_SESSION['auth_fail_text']='username/password incorrect.';
            header("Location: ./login.php");
        }
        if($response_=='400'){
            $_SESSION['auth_fail_text']='Something went wrong. Please try again.';
            header("Location: ./login.php");
        }

    } 
?>