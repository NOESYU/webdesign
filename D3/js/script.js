$(".submenu").hide();
$(".menu>li").mouseover(function(){
  $(".submenu").stop().fadeIn();
})
$(".menu>li").mouseout(function(){
  $(".submenu").stop().fadeOut();
})