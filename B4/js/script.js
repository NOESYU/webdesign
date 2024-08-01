$(".submenu, .sub_bg").hide();
$(".menu>li").mouseover(function(){
  $(".submenu, .sub_bg").stop().fadeIn();
})
$(".menu>li").mouseout(function(){
  $(".submenu, .sub_bg").stop().fadeOut();
})


setInterval(slide);
function slide(){
  $(".slide").delay(2000).animate({marginLeft: "-100%"}, 1000);
  $(".slide").delay(2000).animate({marginLeft: "-200%"}, 1000);
  $(".slide").delay(2000).animate({marginLeft: "0"}, 1000);
}


$(".popup_bg, .popup").hide();
$(".notice>li>a").click(function(){
  $(".popup_bg, .popup").show();
})
$(".close").click(function(){
  $(".popup_bg, .popup").hide();
})