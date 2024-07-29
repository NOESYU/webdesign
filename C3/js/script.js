$(".submenu").hide();
$(".menu>li").mouseover(function(){
  $(this).children(".submenu").stop().fadeIn();
})
$(".menu>li").mouseout(function(){
  $(this).children(".submenu").stop().fadeOut();
})

setInterval(slide);
function slide(){
  $(".slide").delay(2000).animate({marginLeft:"-100%"}, 1000);
  $(".slide").delay(2000).animate({marginLeft:"-200%"}, 1000);
  $(".slide").delay(2000).animate({marginLeft:"0"}, 1000);
}