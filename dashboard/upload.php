<?php

$target_dir = "../images/fleet/";
if(!is_dir($target_dir)) {
    mkdir('images',0755);
    mkdir($target_dir,0755);
}
$basefile_name=basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($basefile_name,PATHINFO_EXTENSION));
$target_file = $target_dir .$_POST["altered_file_name"].".". $imageFileType;
/* echo "=====";
echo ($target_file);
echo "=====";  */
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
  $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
  if($check !== false) {
    $uploadOk = 1;
  } else {
    $uploadOk = 0;
  }
}

// Check if file already exists
if (file_exists($target_file)) {
  $uploadOk = 0;
}

// Check file size in bytes  max 5mb
if ($_FILES["fileToUpload"]["size"] > 5000000) {
  $uploadOk = 0;
}

// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
  $uploadOk = 0;
}
$res = new \stdClass();
if ($uploadOk == 0) {
    //echo '500';
    $res->status='500';
    $res=json_encode($res);
    echo($res);
} else {
  if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {

    if(isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on') $http_protocol = "https"; 
    else $http_protocol = "http"; 
    $res->http_proto= $http_protocol;
    $res->server_host= $_SERVER['HTTP_HOST'];
    $res->status='201';
    $res->filename=$_POST["altered_file_name"].".". $imageFileType;
    $res->filepath=$target_dir;
    $res->file=$target_file;
  } else {
    $res->status='500';
  }
  $res=json_encode($res);
    echo($res);
}
?>