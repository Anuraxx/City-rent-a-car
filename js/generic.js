var element3;
var element4;
var element5;
element3=document.getElementsByTagName('body')[0];
element4=document.getElementsByClassName('super_container')[0];
element5=document.getElementById('loading-balls-container');
element6=document.getElementsByClassName('loadingio-spinner-dual-ball-q11htn0qkw')[0];
element7=document.getElementsByClassName('ldio-895bvybseoy')[0];

$(document).ready(()=>{
   
    //callback();
    
});
document.onreadystatechange=function(){
    var state=document.readyState;
     if(state=='complete'){
          setTimeout(() => {
            $(element5).fadeOut('fast',()=>{
                element5.remove();
                element6.setAttribute('class','');
                element7.setAttribute('class','');
            });
            
            /* element3.style.backgroundImage="url('./images/staring.jpg')"; */

            element4.style.backgroundImage="url('./images/staring.jpg')";
            element4.style.position='unset';
            element4.style.visibility='visible';  
          }, 0);
    } 
}

$(window).scroll(()=>{
    
});


function openNav() {
    $('.hamburger').hide();
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    $('.hamburger').show();
  document.getElementById("myNav").style.width = "0%";
}


function callback(){
    
}