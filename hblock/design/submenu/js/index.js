$(document).ready(function(){
	var altura = $('.menufix').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.menufix').addClass('menu-fixed');
		} else {
			$('.menufix').removeClass('menu-fixed');
		}
	});

});