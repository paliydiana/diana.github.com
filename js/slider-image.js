(function ($) {
var SlideSpeed = 700;
var TimeOut = 3000;
 
$(document).ready(function(e) {
	$('.slide-picture').css(
		{"position" : "absolute",
		 "top":'0', "left": '0'}).hide().eq(0).show();
	var slideNum = 0;
	var slideTime;
	slideCount = $(".slider-picture-content .slide-picture").size();
	var animSlide = function(arrow){
		clearTimeout(slideTime);
		$('.slide-picture').eq(slideNum).fadeOut(SlideSpeed);
		if(arrow == "next"){
			if(slideNum == (slideCount-1)){slideNum=0;}
			else{slideNum++}
			}
		else if(arrow == "prew")
		{
			if(slideNum == 0){slideNum=slideCount-1;}
			else{slideNum-=1}
		}
		else{
			slideNum = arrow;
			}
		$('.slide-picture').eq(slideNum).fadeIn(SlideSpeed, rotator);
		$(".control-slide-picture.active").removeClass("active");
		$('.control-slide-picture').eq(slideNum).addClass('active');
		}
	var $adderSpan = '';
	$('.slide-picture').each(function(index) {
			$adderSpan += '<span class = "control-slide-picture">' + index + '</span>';
		});
	$('<div class ="slider-picture-controls">' + $adderSpan +'</div>').appendTo('.slider-picture');
	$(".control-slide-picture:first").addClass("active");
	$('.control-slide-picture').click(function(){
	var goToNum = parseFloat($(this).text());
	animSlide(goToNum);
	});
	var pause = true;
	var rotator = function(){
			if(!pause){slideTime = setTimeout(function(){animSlide('next')}, TimeOut);}
			}
	$('.slider-picture').hover(	
		function(){clearTimeout(slideTime); pause = true;},
		function(){pause = false; rotator();
		});
	rotator();
});
})(jQuery);