$(".submenu").hide();
$(".menu>li").mouseover(function(){
  $(this).children(".submenu").stop().fadeIn();
})
$(".menu>li").mouseout(function(){
  $(this).children(".submenu").stop().fadeOut();
})