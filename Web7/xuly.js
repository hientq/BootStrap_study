$(function(){
	$('.over-img').css('line-height',$('.sanpham').height()+'px');
	$(window).resize(function(){
		$('.over-img').css('line-height',$('.sanpham').height()+'px');
	});
	$(window).scroll(function(){
		var curent_position = $('body').scrollTop();

		//console.log($('body').scrollTop());

		if (curent_position > 337) {
			$('.navbar-fixed-top').addClass('thunho');
		}else if(curent_position < 110){
			$('.navbar-fixed-top').removeClass('thunho');
		}

		if (curent_position > 300) {
			$('.top2').addClass('top2-animate');
		} else {
			$('.top2').removeClass('top2-animate');
		}
	});

	$('.menu li a').on('click', function(){
		$('body').animate({scrollTop : $($(this).attr('href')).offset().top -100}, 2000, "easeOutBack");
		return false;
		//alert($(this).attr('href'));
	});
});