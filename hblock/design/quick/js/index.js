 $(document).ready(function() {
 // 기존 css에서 플로팅 배너 위치(top)값을 가져와 저장한다.
 var floatPosition = parseInt($("#floatMenu").css('top'));
 // 250px 이런식으로 가져오므로 여기서 숫자만 가져온다. parseInt( 값 );
 $(window).scroll(function() {
  // 현재 스크롤 위치를 가져온다.
  var scrollTop = $(window).scrollTop();
  var newPosition = scrollTop + floatPosition + "px";
  // 애니메이션 없이 바로 따라감 
  $("#floatMenu").stop().animate({
   "top" : newPosition
  }, 500);
 }).scroll();
});


$(function(){
 $('.data').mouseover(function(e) { // 마우스 오버시 좌표값을 받는다 -> e
  $(this).mousemove(function(e) {
   $('#divLayer #title').empty().append($(this).attr("l_name")); // divLayer안에있는 title의 값을 data의 wr_name 값으로 치환한다.

   $('#divLayer #conttent').empty().append($(this).text());

   var t=e.pageY-15;
   var l=e.pageX-120;

   $('#divLayer').css({"top":t, "left":l,"position":"absolute","opacity":"0,8" }).show();
  });
 });

 $('.data').mouseout(function() {
  $('#divLayer').hide();
 });
});