/*--------------*/



// Main/Product image slider for product page
$('#detail .main-img-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  fade:false,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 300,
  lazyLoad: 'ondemand',
  asNavFor: '.thumb-nav',
  prevArrow: '<div class="slick-prev"><span class="sr-only sr-only-focusable"><img src="img/hblock/design/slide_03/img/bt_pre.png" /></span></div>',
  nextArrow: '<div class="slick-next"><span class="sr-only sr-only-focusable"><img src="img/hblock/design/slide_03/img/bt_next.png" /></span></div>'
});
// Thumbnail/alternates slider for product page
$('.thumb-nav').slick({
  slidesToShow: 6,
  slidesToScroll: 6,
  infinite: false,
  centerPadding: '0px',
  asNavFor: '.main-img-slider',
  dots: false,
  centerMode: false,
  draggable: false,
  speed:200,
  focusOnSelect: true,
  prevArrow: '<div class="slick-prev"><span class="sr-only sr-only-focusable"><img src="img/hblock/design/slide_03/img/bt_pre.png" /></span></div>',
  nextArrow: '<div class="slick-next"><span class="sr-only sr-only-focusable"><img src="img/hblock/design/slide_03/img/bt_next.png" /></span></div>'  
});


//keeps thumbnails active when changing main image, via mouse/touch drag/swipe
$('.main-img-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
  //remove all active class
  $('.thumb-nav .slick-slide').removeClass('slick-current');
  //set active class for current slide
  $('.thumb-nav .slick-slide:not(.slick-cloned)').eq(currentSlide).addClass('slick-current');  
});