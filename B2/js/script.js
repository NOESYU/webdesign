$(".popup_bg").hide();
$(".notice>li:nth-child(1)").click(function(){
  $(".popup_bg").show();
});
$(".close").click(function(){
  $(".popup_bg").hide();
});

$(".submenu, .sub_bg").hide();
$(".menu").mouseover(function(){
  $('.submenu, .sub_bg').stop().fadeIn();
})
$(".menu").mouseout(function(){
  $('.submenu, .sub_bg').stop().fadeOut();
})


setInterval(slide);
function slide(){
  // marign: 고정값으로 주기
  $(".slide").delay(2000).animate({marginTop: "-300px"}, 1000);
  $(".slide").delay(2000).animate({marginTop: "-600px"}, 1000);
  $(".slide").delay(2000).animate({marginTop: "0"}, 1000);
}