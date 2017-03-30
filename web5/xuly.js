$(function(){
	var position = $('#service').position();
	$('.navbar-right li:nth-child(2) a').on('click',function(){
		$('body').animate({scrollTop:position.top});
		return false;
	});

	$('.navbar-right li:nth-child(1) a').on('click',function(){
		$('body').animate({scrollTop:$('#about').position().top});
		return false;
	});
	$('.navbar-right li:nth-child(3) a').on('click',function(){
		$('body').animate({scrollTop:$('#contact').position().top});
		return false;
	});

});