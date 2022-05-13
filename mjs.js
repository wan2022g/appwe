$(function(){
	$('body').css({
		'width':$(window).width(),
		'height':$(window).height(),
	})

	$(window).resize(function(){
		$('body').css({
			'width':$(window).width(),
			'height':$(window).height(),
		})
	})
})