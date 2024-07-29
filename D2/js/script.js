$(".popup_bg").hide();
$(".notice>li:nth-child(1)").click(function(){
  $(".popup_bg").show();
})
$(".close").click(function(){
  $(".popup_bg").hide();
})

$(".submenu").hide();
$(".menu>li").mouseover(function(){
  $(this).children(".submenu").stop().slideDown();
})
$(".menu>li").mouseout(function(){
  $(this).children(".submenu").stop().slideUp();
})


setInterval(slide);
function slide(){
  $(".slide").delay(2000).animate({marginLeft: "-100%"}, 1000)
  $(".slide").delay(2000).animate({marginLeft: "-200%"}, 1000)
  $(".slide").delay(2000).animate({marginLeft: 0}, 1000)
}
