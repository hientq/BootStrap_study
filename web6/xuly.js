$(function(){
	$(window).resize(function(){
		var docao = $(window).height();
		var dorong = $(window).width();
		console.log(docao +"  "+ dorong);
		$('.top1').css({'height':docao});
		$('.top1').css({'width':dorong});
	});
	$('#nutmenu').on('click',function(){
		$('.tabmenuphai').addClass('ra');
		return false;
	});
	$('#menuclose').on('click',function(){
		$('.tabmenuphai').removeClass('ra');
		return false;
	});
	$('.container').on('click', function(){
		$('.tabmenuphai').removeClass('ra');
		return false;
	});
	$('.menudoc a').hover(function(){
		 $(this).parent().addClass('lihover');
		 $(this).css('color','black');
	}, function(){
		$(this).parent().removeClass('lihover');
		$(this).css('color','white');
	});

	$('.menudoc li a').on('click', function(){
		var curent_a = $(this).attr("href");
		console.log(curent_a);
		$('body').animate({scrollTop:$(curent_a).offset().top}); // or . possition()
		return false;
	});
});