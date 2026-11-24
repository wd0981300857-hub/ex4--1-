// JavaScript Document

$(document).ready(function(){

	//menu
	$(".menu").click(function(){ 
		$("nav").slideToggle();
	});

	//menu rwd
	$(window).on('load resize',function(){
		var a_w = document.body.clientWidth;
		if(a_w >= 768) $("nav").show(); else $("nav").hide();
	});



//first but + content
	$(".list").eq(0).addClass("ch_bg");
	$(".content").hide().eq(0).show();
	


//click event
	$(".list").click(function(){
        $(this).addClass("ch_bg").siblings().removeClass("ch_bg");

		var _index = $(this).index();
		$(".content").stop(true, true).hide().eq(_index).fadeIn(600);

		
	});

	//swiper
var swiper = new Swiper('.mySwiper', {
	speed:3000,//切換
	spaceBetween: 0,//間隔
	centeredSlides: true,
	autoplay: {
		delay: 3000,//停多久
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	});

});