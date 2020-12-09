/** This php file is created specially for heroku platform and not belong to this project */

<?php

if(isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on') $http_protocol = "https"; 
else $http_protocol = "http"; 
$server_host= $_SERVER['HTTP_HOST'];
$server_url=$http_protocol."://".$server_host."/index.html";
//error_log($server_url);
header("Location: $server_url");
exit();
?>