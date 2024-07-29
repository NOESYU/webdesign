$(".submenu").hide();
$(".menu>li").mouseover(function(){
  $(".submenu").stop().fadeIn();
})
$(".menu>li").mouseout(function(){
  $(".submenu").stop().fadeOut();
})

$(".gallery").hide();
$(".tab_title>li:nth-child(2)").click(function(){
  $(".gallery").show();
  $(".notice").hide();
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
})
$(".tab_title>li:nth-child(1)").click(function(){
  $(".gallery").hide();
  $(".notice").show();
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
})

$(".popup").hide();
$(".notice>li:nth-child(1)").click(function(){
  $(".popup").show();
})
$(".close").click(function(){
  $(".popup").hide();
})


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