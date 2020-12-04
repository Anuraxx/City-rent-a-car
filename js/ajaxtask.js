var request;
var slotId;

function getFleetFrame(vehicle){
    return '<div class="fleets-frame"><div class="car-img-wrapper"><img src="'+vehicle.imgId+'"></div><div class="fleet-desc"><img src="https://motors.stylemixthemes.com/rental-two/wp-content/uploads/sites/15/2019/10/mcr-fuel-type.svg"><p>'+vehicle.fueltype+'</p></div><h5 class="fleet-name">'+(vehicle.vehicleId).toUpperCase()+'</h5><div class="hover-buttons-container"><button class="onhover-button" onclick="">BOOK NOW</button><button class="onhover-button" onclick="">CONTACT US</button></div></div>';
}
function createFleetFrame(vehicle){
    //console.log(vehicle.vehicleId);
     var layout=getFleetFrame(vehicle);
    //var element1=document.getElementsByClassName('fleets-frames-wrapper')[0];
    var temp=$.parseHTML(layout);
    //console.log(temp);
    temp.forEach(element => {
        $(slotId).append(element);
    }); 

}
function sendInfo(slotId,catgegory){
    this.slotId=slotId;
    loadFleets([],catgegory);
 /*    //console.log(catg1+" "+catg2+" "+catg3);
    //$(slotId).css('background-color','red');
    //var url="https://30b39c62f9cf.ngrok.io/proj/index.jsp";  
    var url=`http://localhost:3000/getVehicles?query&catg=SUV`;

    if(window.XMLHttpRequest){  
        request=new XMLHttpRequest();  
    }  
    else if(window.ActiveXObject){  
        request=new ActiveXObject("Microsoft.XMLHTTP");  
    }  
  
    try{  
        request.onreadystatechange=getInfo;  
        request.open("GET",url,true);  
        //request.setRequestHeader("Access-Control-Allow-Origin", "*");
        request.send();  
    }catch(e){alert("Unable to connect to server");} */  
}  
  
function getInfo(){  
    if(request.readyState==4){  
        var vehiclesData=request.responseText;  
        loadFleets(JSON.parse(vehiclesData));
    }  
}  

function loadFleets(vehiclesData,catg){

     var SUV=[{"vehicleId":"TOYOTA FORTUNER","imgId":"./images/fleet/fortuner.png","fueltype":"Diesel"},{"vehicleId":"FORT ENDEAVOUR","imgId":"./images/fleet/fordendeavour.png","fueltype":"Diesel"},{"vehicleId":"Renault Duster","imgId":"./images/fleet/duster.png","fueltype":"Petrol"}];
     var STANDARD=[{"vehicleId":"HONDA CITY","imgId":"./images/fleet/hondacity.png","fueltype":"Gas"},{"vehicleId":"NISSAN SUNNY","imgId":"./images/fleet/sunny.png","fueltype":"Petrol"},{"vehicleId":"MARUTI CIAZ","imgId":"./images/fleet/ciaz.png","fueltype":"Diesel"}];
     var SEDAN=[{"vehicleId":"SWIFT DZIRE","imgId":"./images/fleet/swiftdezire.png","fueltype":"Petrol"},{"vehicleId":"HONDA AMAZE","imgId":"./images/fleet/hondaamage.png","fueltype":"Diesel"},{"vehicleId":"HUYNDAI XCENT","imgId":"./images/fleet/xcent.png","fueltype":"Diesel"},{"vehicleId":"TOYOTA ETIOS","imgId":"./images/fleet/etios.png","fueltype":"Petrol"}];
     if(catg=='SUV') vehiclesData=SUV;
     if(catg=='STANDARD') vehiclesData=STANDARD;
     if(catg=='SEDAN') vehiclesData=SEDAN;
     $(slotId).text('');


     var timeout=200;
    
     vehiclesData.forEach(data=>{
         
        setTimeout(()=>{
            var vinfo={
                slotid: slotId,
                vehicleId: data.vehicleId,
                imgId: data.imgId,
                fueltype: data.fueltype
            }
            createFleetFrame(vinfo);
        },timeout);
        timeout+=200;
     })
    
    
}