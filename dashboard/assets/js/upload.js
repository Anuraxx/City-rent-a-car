
$("#catg_form").submit((event)=>{
    event.preventDefault();
    var form=document.getElementsByName("catg_form")[0];
    var _data = new FormData(form);
    var formData={
        new_category: _data.get("new_category")
    }
    console.log(formData);
    $("#submit2").prop("disabled", true);
    $.ajax({
        type: "POST",
        url: `${constant.server_url}/setCategory`,
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
              if(response=='500'){
                  console.log('Something went wrong. Check logs.');
                  $('.default_status_text_box').text('Something went wrong. Please try again.');
                  setStatusBoxProperty('FAIL');
              }
              if(response=='201'){
                  console.log('Category updated.');
                  $('.default_status_text_box').text('Category updated.');
                  setStatusBoxProperty('SUCCESS');
              } 
              $("#submit2").prop("disabled", false);
              document.getElementById("catg_form").reset();
        },
        error: function (e) {
            console.log("ERROR2 : ", e);
            $("#submit2").prop("disabled", false);
            document.getElementById("catg_form").reset();
        }
    });
})


$("#veh_form").submit((event)=>{
    event.preventDefault();
    var newFileName=Date.now();
    var form=document.getElementsByName("veh_form")[0];
    var _data = new FormData(form);
    var formData={
        vehid: _data.get("veh_name"),
        fuelid: _data.get("veh_fuel_type"),
        veh_catg: (_data.get("veh_category").split(':'))[1]
    }
    //veh_catg: (_data.get("veh_category").split(':'))[1]
    //console.log(formData);
      _data.append("altered_file_name", newFileName);
      $("#submit").prop("disabled", true);
 
      $.ajax({
          type: "POST",
          enctype: 'multipart/form-data',
          url: "../dashboard/upload.php",
          data: _data,
          processData: false,
          contentType: false,
          cache: false,
          timeout: 600000,
          success: function (response) {
            response=JSON.parse(response);
            
            console.log("SUCCESS1 : ", response.status);
                
                if(response.status=='500'){
                    console.log('Somthing went wrong. Check logs.');
                    $('.default_status_text_box').text('Something went wrong. Please try again.');
                    setStatusBoxProperty('FAIL');
                }
                if(response.status=='201'){
                    
                    var vehicle_data={};
                    $.extend(vehicle_data,formData,response);
                    console.log(vehicle_data);
                     $.ajax({
                        type: "POST",
                        url: `${constant.server_url}/upload`,
                        enctype: 'application/x-www-form-urlencoded',
                        data: JSON.stringify(vehicle_data),
                        dataType: "json",
                        processData: false,
                        crossDomain: true,
                        contentType: 'application/json; charset=utf-8',
                        cache: false,
                        timeout: 600000,
                        success: function (response) {
                          console.log("SUCCESS2 : ", response);
                              if(response=='500'){
                                  console.log('Something went wrong. Check logs.');
                                  $('.default_status_text_box').text('Something went wrong. Please try again.');
                                  setStatusBoxProperty('FAIL');
                              }
                              if(response=='201'){
                                  console.log('Vehicle updated.');
                                  $('.default_status_text_box').text('Vehicle updated.');
                                  setStatusBoxProperty('SUCCESS');
                              } 
                    
                        },
                        error: function (e) {
                            console.log("ERROR2 : ", e);
                    
                        }
                    }); 
                }  
              
              $("#submit").prop("disabled", false);
              document.getElementById("veh_form").reset();

          },
          error: function (e) {

              console.log("ERROR1 : ", e);
              $("#submit").prop("disabled", false);
              document.getElementById("veh_form").reset();
          }
      });
 
})