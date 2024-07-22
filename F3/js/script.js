// 한번에 쓰기 : $(".submenu, .sub_bg").hide();
$(".submenu").hide();
$(".sub_bg").hide();

$(".menu").mouseover(function(){
  $(".submenu").stop().fadeIn();
  $(".sub_bg").stop().fadeIn();
})
$(".menu").mouseout(function(){
  $(".submenu").stop().fadeOut();
  $(".sub_bg").stop().fadeOut();
})

$(".gallery").hide();
$(".tab_title>li:nth-child(2)").click(function(){
  $(".notice").hide();
  $(".gallery").show();
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
})
$(".tab_title>li:nth-child(1)").click(function(){
  $(".notice").show();
  $(".gallery").hide();
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