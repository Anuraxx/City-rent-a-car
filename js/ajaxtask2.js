$("#enquiry_form").submit((event)=>{
    event.preventDefault();
    var form=document.getElementsByName("enquiry_form")[0];
    var _data = new FormData(form);
    var formData={
        name: _data.get("name"),
        email:  _data.get("email"),
        contact:  _data.get("phoneno"),
        dor:  _data.get("dor"),
        type:  _data.get("select_cartype")
    }
    //console.log(formData);
    $("#sub01").prop("disabled", true);
    $.ajax({
        type: "POST",
        url: "https://fortunate-versed-clematis.glitch.me/ping/mail",
        enctype: 'application/x-www-form-urlencoded',
        data: JSON.stringify(formData),
        dataType: "json",
        processData: false,
        crossDomain: true,
        contentType: 'application/json; charset=utf-8',
        cache: false,
        timeout: 600000,
        success: function (response) {
          console.log("SUCCESS2 : ", response);
              if(response.status=='500'){
                  console.log('Somthing went wrong. Check logs.');
              }
              if(response.status=='201'){
                  console.log('Category updated.');
              } 
              $("#sub01").prop("disabled", false);
        },
        error: function (e) {
            console.log("ERROR2 : ", e);
            $("#sub01").prop("disabled", false);
        }
    });
})