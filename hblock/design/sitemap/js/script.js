$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
    $('.slide-menu').toggleClass('open');
    $('#overlay').fadeToggle('fast');
	});
});

$(document).ready(function(){
  $('#overlay').click(function(){
    $('#nav-icon1').removeClass('open');
    $('.slide-menu').removeClass('open');
    $('#overlay').fadeOut('fast');
  });
});

/*
$(document).ready(function(){
  $('.menu li a').click(function(){
    $('#nav-icon1').removeClass('open');
    $('.slide-menu').removeClass('open');
    $('#overlay').fadeOut('fast');
  });
});
*/


