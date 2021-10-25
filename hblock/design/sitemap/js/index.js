function scrollNav() {
  $('#link a').click(function(){  
    //Toggle Class
    $(".select").removeClass("select");      
    $(this).closest('li').addClass("select");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('select');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 0
    }, 400);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();


