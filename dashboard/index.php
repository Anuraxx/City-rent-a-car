<?php
// Start the session
session_start();

if( !isset($_SESSION['auth']) || $_SESSION['auth'] == 'false'){
  header("Location: ./login.php");
}
if( isset($_GET['logout']) && $_GET['logout']==true){
  session_unset();
  session_destroy();
  header("Location: ./login.php");
}
?>

<!DOCTYPE html>
<html>

<head>
  <title>CITY | Dashboard</title>
  <link rel="icon" href="../images/company-logo/City .jpg" type="image/x-icon">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="assets/css/style.css">
  <link rel="stylesheet" type="text/css" href="../styles/generic_style.css">
</head>

<body ng-app='cty-ang' ng-cloak ng-controller="cty-contr">


  <header>
    <div class="logo_container">
      <div class="logo"><a href="#">
          <img src="../images/company-logo/cracar.png" alt=""></a>

      </div>

    </div>
    <div class="logout_menu">
      <img class="logout_button" src="https://img.icons8.com/flat_round/64/000000/shutdown--v1.png" />
      <!--button id="logout_button"></button-->
      <p>Dashboard</p>
    </div>
  </header>

  <div class="tab">
    <button class="tablinks" onclick="loadSection(event, 'uploadCategory')" id="defaultOpen">Upload Category</button>
    <button class="tablinks" onclick="loadSection(event, 'uploadVehicle')">Upload Vehicle</button>
    <button class="tablinks" onclick="loadSection(event, 'modify')">Modify</button>
  </div>

  <div id="uploadCategory" class="tabcontent">
    <form name="catg_form" id="catg_form">
      <label for="new_category">Enter new category:</label>
      <input type="text" name="new_category" id="new_category">
      <button class="submit" id='submit2'>Save</button>
    </form>
    <div>
      <p class='default_status_text_box'></p>
    </div>
  </div>

  <div id="uploadVehicle" class="tabcontent">
    <form name="veh_form" id="veh_form">
      <section>
        <label for="veh_category">Choose a category:</label>
        <select name="veh_category" id="category" 
          ng-model="selectedName" ng-options="x for x in catgs">
        </select>
      </section>
      <section>
        <label for="veh_name">Enter vehicle name:</label>
        <input type="text" name="veh_name" id="nameid1">
      </section>
      <section>
        <label for="veh_fuel_type">Enter fuel type:</label>
        <input type="text" name="veh_fuel_type" id="fuelid">
      </section>
      <section>
        <label for="fileToUpload">Choose a file :</label>
        <input type="file" name="fileToUpload" id="fileid" placeholder="bhvgc">
      </section>

      <button class="submit" id='submit'>Save</button>
    </form>
    <div>
      <p class='default_status_text_box'></p>
    </div>
  </div>

  <div id="modify" class="tabcontent">
    <div class="container">
      <h2>Hoverable Dark Table</h2>
      <p>The .table-hover class adds a hover effect (grey background color) on table rows:</p>
      <table  class="table table-dark table-hover" >
        <thead>
          <tr>
            <th>Vehicle Name</th>
            <th>Category</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          <tr ng-repeat="x in prod">
            <td>{{x.vechid}}</td>
            <td>{{x.catg}}</td>
            <td><img src="./assets/images/icons/remove.svg" /></td>
          </tr>


        </tbody>
      </table>
    </div>
  </div>


  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
  <script src="../js/jquery-3.2.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <script src="../js/constant.js"></script>
  <script src="assets/js/index.js"></script>
  <script src="assets/js/upload.js"></script>
  <script src="assets/js/controller.js"></script>



</body>

</html>

