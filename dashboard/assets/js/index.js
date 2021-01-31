function resetContentArea() {
  console.log("..")
  var _forms=document.getElementsByTagName('form');
  Array.from(_forms).forEach(form => {
      form.reset();
  }); 

  $('.default_status_text_box').text('');
  $('.default_status_text_box').css("background-color","unset");
  $('.default_status_text_box').css("color","unset");
}

function loadSection(evt, sectionId) {
  resetContentArea();
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(sectionId).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

$(document).ready(() => {
  $('.logout_button').click(function () {
    $(this).css("box-shadow", "0 0 0");
    setTimeout(() => {
      $(this).css("box-shadow", "0 0 5px white");
      setTimeout(() => {
        //$.get("./index.php?logout=true");
        window.location.href = './index.php?logout=true';
      }, 100);
    }, 100);

  })
});

function setStatusBoxProperty(status_text) {
  console.log(status_text);
  if (status_text == 'SUCCESS') {
    $('.default_status_text_box').css("background-color", "#defde8");
    $('.default_status_text_box').css("color", "#4cd860");
  } else {
    if (status_text == 'FAIL') {
      $('.default_status_text_box').css("background-color", "#fddee3");
      $('.default_status_text_box').css("color", "#d84c5a");
    } else return;
  }
}

function getRows(vehicleInfo){

}
function loadTableData(){

}