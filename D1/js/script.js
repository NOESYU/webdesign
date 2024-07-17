$(".popup").hide();

$(".submenu").hide();
$(".menu>li").mouseover(function(){
  $(this).children(".submenu").stop().slideDown();
})
$(".menu>li").mouseout(function(){
  $(this).children(".submenu").stop().slideUp();
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