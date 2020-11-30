var request;
var slotId;

function getFleetFrame(carname,imgid,desc){
    return '<div class="fleets-frame"><div class="car-img-wrapper"><img src="images/'+imgid+'"></div><div class="fleet-desc"><img src="https://motors.stylemixthemes.com/rental-two/wp-content/uploads/sites/15/2019/10/mcr-fuel-type.svg"><p>'+desc+'</p></div><h5 class="fleet-name">'+carname+'</h5><div class="hover-buttons-container"><button class="onhover-button" onclick="">BOOK NOW</button><button class="onhover-button" onclick="">CONTACT US</button></div></div>';
}
function createFleetFrame(slotId,carname,imgid,desc){
    var layout=getFleetFrame(carname.toUpperCase(),imgid,desc);
    //var element1=document.getElementsByClassName('fleets-frames-wrapper')[0];
    var temp=$.parseHTML(layout);
    temp.forEach(element => {
        $(slotId).append(element);
    });

}
function sendInfo(slotId,catgname){
    this.slotId=slotId;
    //console.log(catg1+" "+catg2+" "+catg3);
    //$(slotId).css('background-color','red');
    var url="https://30b39c62f9cf.ngrok.io/proj/index.jsp";  
    

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
        var val=request.responseText;  
        $(slotId).html(val);
    }  
}  
function loadFleets(slotId,catgname){
    $(slotId).text('');
    setTimeout(()=>{
    createFleetFrame(slotId,'Hyundai WagonR','suzuki_PNG12267.png','Petrol');
    },0);
    setTimeout(()=>{
    createFleetFrame(slotId,'Maruti Ciaz','suzuki_PNG12277.png','Disel');
},100);
setTimeout(()=>{
    createFleetFrame(slotId,'Maruti SX4','suzuki_PNG12296.png','Petrol');
},200);
setTimeout(()=>{
    createFleetFrame(slotId,'Swift Desire','suzuki_PNG12309.png','Gas');
},300);
    
}