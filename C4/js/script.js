$(".submenu").hide();
$(".menu>li").mouseover(function(){
  $(this).children(".submenu").stop().fadeIn();
})
$(".menu>li").mouseout(function(){
  $(this).children(".submenu").stop().fadeOut();
})

setInterval(slide);
function slide(){
  $(".slide").delay(2000).animate({marginLeft: "-800px"}, 1000);
  $(".slide").delay(2000).animate({marginLeft: "-1600px"}, 1000);
  $(".slide").delay(2000).animate({marginLeft: "0"}, 1000);
}

$(".popup_bg, .popup").hide();
$(".notice>li:nth-child(1)").click(function(){
  $(".popup_bg, .popup").show();
})
$(".close").click(function(){
  $(".popup_bg, .popup").hide();
})