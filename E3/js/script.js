$(".submenu").hide();
$(".menu>li").mouseover(function(){
  $(this).children(".submenu").stop().fadeIn();
})
$(".menu>li").mouseout(function(){
  $(this).children(".submenu").stop().fadeOut();
})

$(".popup").hide();
$(".notice>li:nth-child(1)").click(function(){
  $(".popup").show();
})
$(".close").click(function(){
  $(".popup").hide();
})