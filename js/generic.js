var element3;
var element4;
var element5;
element3=document.getElementsByTagName('body')[0];
element4=document.getElementsByClassName('super_container')[0];
element5=document.getElementById('loading-balls-container');
element6=document.getElementsByClassName('loadingio-spinner-dual-ball-q11htn0qkw')[0];
element7=document.getElementsByClassName('ldio-895bvybseoy')[0];
/* var constant='http://localhost:3000';
var required_scripts;
var allow=true;

$.getJSON('./configs/JSON/script_mapping.json',function(scriptsdt){
  console.log("scripts fetched");
  required_scripts=scriptsdt;
  console.log(required_scripts);
});

$.getJSON('./configs/JSON/properties.json', function(config) {
  console.log("configs loaded.") ;        
  constant=config;
  console.log(constant);
}); 

function check() {
  console.log(constant);
  console.log(required_scripts);
  
}

var intv= setInterval(() => {
  if(constant!=undefined && required_scripts!=undefined){
    //check();
    clearInterval(intv);
    loadScript();
  }
}, 5);
setTimeout(() => {
  clearInterval(intv);
}, 2000);

function loadScript(){
  var filename=getCurrentFileName();
  if(filename!=undefined){
    //console.log();
    var scriptsrc=required_scripts[filename].scripts.src;
    //$("body").append(`<script src="js/demo.js"></script>`);
    var timer=0;
    scriptsrc.forEach(src => {
      setTimeout(()=>{
        //var scriptnode=`<script src="${src}"></script>`;
        //$("body").append(scriptnode);
        console.log('loaded');
      },timer += 0);
      //loadscript(src,()=>{console.log('script ready!'); });
      //document.getElementsByTagName("body")[0].append($.parseHTML(scriptnode));
      //document.getElementsByTagName("body")[0].lastChild
      //$("body").append(scriptnode);
    });
  }
}

function getCurrentFileName(){
  var url=document.URL;
  url=url.split("/");
  var name=url[url.length-1];
  name=name.split(".")[0];
  console.log(name);
  return name;
} */
//getCurrentFileName();
$(document).ready(()=>{
  //$("body").append('<script src="js/controller-01.js"></script>');
    
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