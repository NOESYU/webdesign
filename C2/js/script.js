$(".popup_bg").hide();
$(".notice>li:nth-child(1)").click(function(){
  $(".popup_bg").show();
});
$(".close").click(function(){
  $(".popup_bg").hide();
});

$(".submenu").hide();
$(".menu>li").mouseover(function(){
  $(this).children(".submenu").stop().slideDown();
});
$(".menu>li").mouseout(function(){
  $(this).children(".submenu").stop().slideUp();
});


$(".slide2, .slide3").hide();
setInterval(slide);
function slide(){
  $(".slide").delay(2000);
  $(".slide1").fadeOut(1000);
  $(".slide2").fadeIn(1000);
  $(".slide").delay(2000);
  $(".slide2").fadeOut(1000);
  $(".slide3").fadeIn(1000);
  $(".slide").delay(2000);
  $(".slide3").fadeOut(1000);
  $(".slide1").fadeIn(1000);
}
