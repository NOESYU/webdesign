$(".submenu").hide();
$(".menu>li").mouseover(function(){
  $(this).children(".submenu").stop().fadeIn();
})
$(".menu>li").mouseout(function(){
  $(this).children(".submenu").stop().fadeOut();
})

setInterval(slide);
function slide(){
  $(".slide").delay(2000).animate({marginTop: "-300px"});
  $(".slide").delay(2000).animate({marginTop: "-600px"});
  $(".slide").delay(2000).animate({marginTop: "0"});
}


$(".popup").hide();
$(".notice>li>a:nth-child(1)").click(function(){
  $(".popup").show();
})
$(".close").click(function(){
  $(".popup").hide();
})