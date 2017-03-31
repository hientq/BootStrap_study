$(function(){
	$('.over-img').css('line-height',$('.sanpham').height()+'px');
	$(window).resize(function(){
		$('.over-img').css('line-height',$('.sanpham').height()+'px');
	});
});