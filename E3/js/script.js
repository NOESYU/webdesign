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


setInterval(slide);
function slide(){
  // margin 값 이상하면 그냥 고정 px 로 주기.
  $(".slide").delay(2000).animate({marginTop: "800px"}, 1000);
  $(".slide").delay(2000).animate({marginTop: "1600px"}, 1000);
  $(".slide").delay(2000).animate({marginTop: 0}, 1000);
}