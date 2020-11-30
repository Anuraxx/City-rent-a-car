/* function updateClass(){
    var wcu$box=document.getElementsByClassName('wcu-box');
    len=wcu$box.length;
    
    wcu$box[0].className += " swiper-slide swiper-slide-active";
    wcu$box[1].className += " swiper-slide swiper-slide-next";
    for(var i=2;i<len;i++){
        //console.log(wcu$box[i].className);
        wcu$box[i].className +=" swiper-slide";
    }
    var box=[];
    for(var i=0;i<len;i++) box[i]=wcu$box[i];

    var slidewraper= document.getElementsByClassName('swiper-wrapper')[0];
    slidewraper.innerHTML='';
    for(var i=0;i<len;i++){
        slidewraper.append(box[i]);
    } 
} */

var resox;

function getWcuContainerLayout(){
    var layout={
        //x800 : '<div class="wcu-box swiper-slide swiper-slide-active"> <div class="img-container"> <img src="images/safe.svg"/> </div><h6>Secured</h6> <h2>It is a long established fact that a reader will be distracted by the</h2> </div><div class="wcu-box swiper-slide swiper-slide-next"> <div class="img-container"> <img src="images/chaufer.svg"> </div><h6>Experienced Chauffeurs</h6> <h2>It is a long established fact that a reader will be distracted by the</h2></div><div class="wcu-box swiper-slide"> <div class="img-container"> <img src="images/belt.svg"> </div><h6>Safe Driving</h6> <h2>It is a long established fact that a reader will be distracted by the</h2></div><div class="wcu-box swiper-slide"> <div class="img-container"> <img src="images/punchuality.svg"> </div><h6>Punctuality</h6> <h2>It is a long established fact that a reader will be distracted by the</h2></div><div class="wcu-box swiper-slide"> <div class="img-container"> <img src="images/monitoring.svg"> </div><h6>Close Monitoring Of Duties</h6> <h2>It is a long established fact that a reader will be distracted by the</h2></div><div class="wcu-box swiper-slide"> <div class="img-container"> <img src="images/onlinesupport.svg"> </div><h6>24X7 Online Service & Support</h6> <h2>It is a long established fact that a reader will be distracted by the</h2></div><div class="wcu-box swiper-slide"> <div class="img-container"> <img src="images/diamond.svg"> </div><h6>Premium Services</h6> <h2>It is a long established fact that a reader will be distracted by the</h2></div><div class="wcu-box swiper-slide"> <div class="img-container"> <img src="images/punchuality.svg"> </div><h6>Punctuality</h6> <h2>It is a long established fact that a reader will be distracted by the</h2></div>',
        //xdefault : '<div class="swiper-slide swiper-slide-active"><div class="wcu-box"><div class="img-container"><img src="images/safe.svg"/></div><h6>Secured</h6><h2>It is a long established fact that a reader will be distracted by the</h2></div><div class="wcu-box"><div class="img-container"><img src="images/chaufer.svg"></div><h6>Experienced Chauffeurs</h6><h2>It is a long established fact that a reader will be distracted by the</h2></div><div class="wcu-box"><div class="img-container"><img src="images/belt.svg"></div><h6>Safe Driving</h6><h2>It is a long established fact that a reader will be distracted by the</h2></div></div><div class="swiper-slide swiper-slide-next"><div class="wcu-box"><div class="img-container"><img src="images/punchuality.svg"></div><h6>Punctuality</h6><h2>It is a long established fact that a reader will be distracted by the</h2></div><div class="wcu-box"><div class="img-container"><img src="images/monitoring.svg"></div><h6>Close Monitoring Of Duties</h6><h2>It is a long established fact that a reader will be distracted by the</h2></div><div class="wcu-box"><div class="img-container"><img src="images/onlinesupport.svg"></div><h6>24X7 Online Service & Support</h6><h2>It is a long established fact that a reader will be distracted by the</h2></div></div><div class="swiper-slide"><div class="wcu-box"><div class="img-container"><img src="images/diamond.svg"></div><h6>Premium Services</h6><h2>It is a long established fact that a reader will be distracted by the readable</h2></div><div class="wcu-box"><div class="img-container"><img src="images/punchuality.svg"></div><h6>Punctuality</h6><h2>It is a long established fact that a reader will be distracted by the</h2></div></div>'
        x800: '<!--Dynamic sliders --><div class="wcu-box swiper-slide swiper-slide-active"> <div class="bg-card-01"></div><div class="img-container"> <img src="images/safe.svg"/> </div><h6>Secured</h6> <h2>It is a long established fact that a reader will be distracted by the</h2></div><div class="wcu-box swiper-slide swiper-slide-next"> <div class="bg-card-01"></div><div class="img-container"> <img src="images/chaufer.svg"> </div><h6>Experienced Chauffeurs</h6> <h2>It is a long established fact that a reader will be distracted by the</h2></div><div class="wcu-box swiper-slide"> <div class="bg-card-01"></div><div class="img-container"> <img src="images/belt.svg"> </div><h6>Safe Driving</h6> <h2>It is a long established fact that a reader will be distracted by the</h2></div><div class="wcu-box swiper-slide"> <div class="bg-card-01"></div><div class="img-container"> <img src="images/punchuality.svg"> </div><h6>Punctuality</h6> <h2>It is a long established fact that a reader will be distracted by the</h2></div><div class="wcu-box swiper-slide"> <div class="bg-card-01"></div><div class="img-container"> <img src="images/monitoring.svg"> </div><h6>Close Monitoring Of Duties</h6> <h2>It is a long established fact that a reader will be distracted by the</h2></div><div class="wcu-box swiper-slide"> <div class="bg-card-01"></div><div class="img-container"> <img src="images/onlinesupport.svg"> </div><h6>24X7 Online Service & Support</h6> <h2>It is a long established fact that a reader will be distracted by the</h2></div><div class="wcu-box swiper-slide"> <div class="bg-card-01"></div><div class="img-container"> <img src="images/diamond.svg"> </div><h6>Premium Services</h6> <h2>It is a long established fact that a reader will be distracted by the</h2></div><div class="wcu-box swiper-slide"> <div class="bg-card-01"></div><div class="img-container"> <img src="images/punchuality.svg"> </div><h6>Punctuality</h6> <h2>It is a long established fact that a reader will be distracted by the</h2></div>',
        xdefault : '<!--Dynamic sliders --><div class="swiper-slide swiper-slide-active"> <div class="wcu-box"> <div class="bg-card-01"></div><div class="img-container"><img src="images/safe.svg"/></div><h6>Secured</h6> <h2>It is a long established fact that a reader will be distracted by the</h2> </div><div class="wcu-box"> <div class="bg-card-01"></div><div class="img-container"><img src="images/chaufer.svg"></div><h6>Experienced Chauffeurs</h6> <h2>It is a long established fact that a reader will be distracted by the</h2> </div><div class="wcu-box"> <div class="bg-card-01"></div><div class="img-container"><img src="images/belt.svg"></div><h6>Safe Driving</h6> <h2>It is a long established fact that a reader will be distracted by the</h2> </div></div><div class="swiper-slide swiper-slide-next"> <div class="wcu-box"> <div class="bg-card-01"></div><div class="img-container"><img src="images/punchuality.svg"></div><h6>Punctuality</h6> <h2>It is a long established fact that a reader will be distracted by the</h2> </div><div class="wcu-box"> <div class="bg-card-01"></div><div class="img-container"><img src="images/monitoring.svg"></div><h6>Close Monitoring Of Duties</h6> <h2>It is a long established fact that a reader will be distracted by the</h2> </div><div class="wcu-box"> <div class="bg-card-01"></div><div class="img-container"><img src="images/onlinesupport.svg"></div><h6>24X7 Online Service & Support</h6> <h2>It is a long established fact that a reader will be distracted by the</h2> </div></div><div class="swiper-slide"> <div class="wcu-box"> <div class="bg-card-01"></div><div class="img-container"><img src="images/diamond.svg"></div><h6>Premium Services</h6> <h2>It is a long established fact that a reader will be distracted by the readable</h2> </div><div class="wcu-box"> <div class="bg-card-01"></div><div class="img-container"><img src="images/punchuality.svg"></div><h6>Punctuality</h6> <h2>It is a long established fact that a reader will be distracted by the</h2> </div></div>'
    }
    return layout;
}

//var defau=true;
var slidewraper= document.getElementsByClassName('swiper-wrapper')[0];

function loadSlideShow(defau){
    if(resox<=800 && !defau){
        //console.log('x800')
        slidewraper.innerHTML='';
        var temp=$.parseHTML(getWcuContainerLayout()['x800']);
        temp.forEach(element => {
            slidewraper.append(element);
        });
        return true;
    }else{
        if(resox>800 && defau){
            //console.log('xdefault')
            slidewraper.innerHTML='';
            var _temp=$.parseHTML(getWcuContainerLayout()['xdefault']);
            _temp.forEach(element => {
                slidewraper.append(element);
            });
            return false;
        }
        else
            return defau;
    }
}

$(document).ready(function(){
    resox=Number($(window).outerWidth());
    //console.log('width='+resox);
    
    var defau= loadSlideShow(resox<=800?false:true);

    $(window).resize(()=>{
        resox=Number($(window).outerWidth());
        //console.log('width='+resox);
        
    });
    
    

    window.addEventListener('resize',()=>{
        //defau= resox<=600?false:true;
        defau = loadSlideShow(defau);

    });
    /* var tmp=$.parseHTML('<div class="swiper-wrapper"><div class="swiper-slide"><div class="wcu-box"><div class="img-container"><img src="images/safe.svg"/></div><h6>Secured</h6><h2>It is a long established fact that a reader will be distracted by the</h2></div><div class="wcu-box"><div class="img-container"><img src="images/chaufer.svg"></div><h6>Experienced Chauffeurs</h6><h2>It is a long established fact that a reader will be distracted by</h2></div><div class="wcu-box"><div class="img-container"><img src="images/belt.svg"></div><h6>Safe Driving</h6><h2>It is a long established fact that a reader will be distracted</h2></div></div><div class="swiper-slide"><div class="wcu-box"><div class="img-container"><img src="images/punchuality.svg"></div><h6>Punctuality</h6><h2>It is a long established fact that a reader will be n</h2></div><div class="wcu-box"><div class="img-container"><img src="images/monitoring.svg"></div><h6>Close Monitoring Of Duties</h6><h2>It is a long established fact that a reader will be distracted by </h2></div><div class="wcu-box"><div class="img-container"><img src="images/onlinesupport.svg"></div><h6>24X7 Online Service & Support</h6><h2>It is a long established fact that a reader will be distracted by the readable contentof apage when</h2></div></div><div class="swiper-slide"><div class="wcu-box"><div class="img-container"><img src="images/diamond.svg"></div><h6>Premium Services</h6><h2>It is a long established fact that a reader will be distracted by the readable</h2></div><div class="wcu-box"><div class="img-container"><img src="images/punchuality.svg"></div><h6>Punctuality</h6><h2>It is a long established fact that a reader</h2></div></div></div>');
    Nod=[]; */
    

});