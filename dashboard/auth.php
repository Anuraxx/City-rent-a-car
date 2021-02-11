<?php
    session_start();
    
    $username=$_POST["email"];
    $passcode=$_POST["pass"];

   //$server_url= "http://localhost:3000/auth?username=$username&passcode=$passcode";
    
    $server = new \stdClass();
    if(isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on')  
        $server->protocol = "https";
    else $server->protocol = "http";
    $server->host= $_SERVER['HTTP_HOST'];
    $server->port= $server->host=='localhost'?':3000':'';
    
    $server_url="$server->protocol://$server->host$server->port/auth?username=$username&passcode=$passcode";

    
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