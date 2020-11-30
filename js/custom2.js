/* if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 120;
    else if (event.detail) delta = -event.detail / 3;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}
function handle(delta) {
    var time = 1000;
	var distance = 300;
    
    $('html, body').stop().animate({
        scrollTop: $(window).scrollTop() - (distance * delta)
    }, time );
    //console.log(parseInt($(window).scrollTop()));
}  */
//import {chaseMargin} from './keyframes.js' ;



        var element1;
        var element2;   
        var _currpos=$(window).scrollTop();
        const windowHeight=$(window).outerHeight();
        var resolution=$(window).outerWidth();
        var $j = jQuery.noConflict(true);
		$j(function () {
			$j('#datetimepicker11').datetimepicker({
				daysOfWeekDisabled: [0, 6]
			});
        });
        
        var reso=['600','1024','1600','1920'];
        var mediaquery={
            "1920":"-170",
            "1600":"-130",
            "1024":"-100",
            "600":"-150"
        }
        function selectResolution(){
            /* var res=$(window).outerWidth();
            resolution=res;
            for(var i=0;i<4;i++){
                if(res<=Number(reso[i]))
                    return mediaquery[reso[i]];
            } */
            return -130;
        }


        function animateElementOfCord(top){
            var elements=document.getElementsByClassName('img-container');
            var len=elements.length;
            if(top>=900){
                isEnable=false;
                for(var i=0;i<len;i++){
                    elements[i].firstElementChild.setAttribute('class','pop-up');
                    elements[i].firstElementChild.style.bottom=0;
                }
            }
        }

        var isEnable=true;

		$(document).ready(function(){
			animateElementOfCord($(window).scrollTop());
            var xtxt=document.getElementsByClassName("txt")[0];
            xtxt.innerHTML=$(window).outerWidth()+" x "+$(window).outerHeight();

            var prvpos=$(window).scrollTop();
			var orgmtpx=$(".enq").css("top");
			var orgmt=orgmtpx.replace(/[^-\d\.]/g, '');
            var mt=$(".enq").css("top").replace(/[^-\d\.]/g, '');
            var down=true;
            var up=false;
            element1= document.getElementsByClassName('header')[0];
            element2=document.getElementsByClassName('helpline-header')[0];
            

            $(window).resize(()=>{
                mt=selectResolution();
                orgmt=mt;
                orgmtpx=mt+"px";
                if(_currpos==0) $(".enq").css("top",orgmtpx);
                /* window.scrollBy(0,1);
                window.scrollBy(0,-1); */
                xtxt.innerHTML=$(window).outerWidth()+" x "+$(window).outerHeight();
            });
            
            $(window).scroll(function(){
                var x=$(window).scrollTop();
                _currpos=x;
                if(isEnable) animateElementOfCord(x);
                mt=parseInt(mt);
                
                if(x>=Math.abs(orgmt) && down){
                    $('.enq-anim').animate({'top':'0'},500,'linear').css("top","0");
                    down=false;
                    up=true;
                }else if(x==0 && up){
                    $('.enq-anim').animate(slideup(orgmtpx),500,'easeOutCubic').css("top",orgmtpx);
                    down=true;
                    up=false;
                }
                if(element1.getAttribute('class')=='header scrolled') 
                    element2.style.display='none';
                else element2.style.display='flex';
                
			}); 
			
		});