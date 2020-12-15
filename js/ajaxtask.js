var request;
var slotId;

function loadDefault(){
    sendInfo('.fleets-tab__content:nth-child(7) .fleets-frames-wrapper','STANDARD');
}

function getFleetFrame(vehicle){
    return '<div class="fleets-frame"><div class="car-img-wrapper"><img src="'+vehicle.imgId+'"></div><div class="fleet-desc"><img src="https://motors.stylemixthemes.com/rental-two/wp-content/uploads/sites/15/2019/10/mcr-fuel-type.svg"><p>'+vehicle.fueltype+'</p></div><h5 class="fleet-name">'+(vehicle.vehicleId).toUpperCase()+'</h5><div class="hover-buttons-container"><button class="onhover-button" onclick="">BOOK NOW</button><button class="onhover-button" onclick="">CONTACT US</button></div></div>';
}
function createFleetFrame(vehicle){

    var layout=getFleetFrame(vehicle);
    var temp=$.parseHTML(layout);
    temp.forEach(element => {
        $(slotId).append(element);
    }); 

}
function sendInfo(slotId,catgegory){
    this.slotId=slotId;

    var url=`https://fortunate-versed-clematis.glitch.me/getVehicles?query&catg=${catgegory}`;

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
    }catch(e){alert("Unable to connect to server");}   
}  
  
function getInfo(){  
    if(request.readyState==4){  
        var vehiclesData=request.responseText;  
        loadFleets(JSON.parse(vehiclesData));
    }  
}  

function loadFleets(vehiclesData){

     $(slotId).text('');


     var timeout=200;
    
     vehiclesData.forEach(data=>{
         
        setTimeout(()=>{
            var vinfo={
                slotid: slotId,
                vehicleId: data.vehicleId,
                imgId: `./images/fleet/${data.imgId}`,
                fueltype: data.fueltype
            }
            createFleetFrame(vinfo);
        },timeout);
        timeout+=200;
     })
    
    
}