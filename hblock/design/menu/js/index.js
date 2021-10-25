$(document).on("scroll", function() {

	if($(document).scrollTop()>100) {
		$("header").removeClass("large").addClass("small");
	} else {
		$("header").removeClass("small").addClass("large");
	}
	
});


function scrollNav() {
  $('.nav a').click(function(){  
    //Toggle Class
    $(".select").removeClass("select");      
    $(this).closest('li').addClass("select");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('select');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 30
    }, 400);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();



$('.icon').click(function() {
  $('.links').toggleClass('toggle',400);

});

$('li').click(function() {
  $('.links').toggleClass('toggle',400);
  $('#topmenu').css("background","");
});

$('.links li a').click(function() {
    $(".links").removeClass("toggle");  

});

