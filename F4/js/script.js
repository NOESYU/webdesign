$(".submenu, .sub_bg").hide();
$(".menu").mouseover(function(){
  $(".submenu, .sub_bg").stop().fadeIn();
})
$(".menu").mouseout(function(){
  $(".submenu, .sub_bg").stop().fadeOut();
})

setInterval(slide);
function slide(){
  $(".slide").delay(2000).animate({marginTop: "-350px"}, 1000);
  $(".slide").delay(2000).animate({marginTop: "-700px"}, 1000);
  $(".slide").delay(2000).animate({marginTop: "0"}, 1000);
}

$(".popup_bg, .popup").hide();
$(".notice>li>a:nth-child(1)").click(function(){
  $(".popup_bg, .popup").show();
})
$(".close").click(function(){
  $(".popup_bg, .popup").hide();
})