$(".submenu").hide();
$(".menu").mouseover(function(){
  $(".submenu").stop().fadeIn();
})
$(".menu").mouseout(function(){
  $(".submenu").stop().fadeOut();
})

$(".gallery").hide();
$(".tab_title>li:nth-child(2)").click(function(){
  $(".notice").hide();
  $(".gallery").show();
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
})
$(".tab_title>li:nth-child(1)").click(function(){
  $(".notice").show();
  $(".gallery").hide();
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
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
  $(".slide").delay(2000).animate({marginTop: "-300px"}, 1000);
  $(".slide").delay(2000).animate({marginTop: "-600px"}, 1000);
  $(".slide").delay(2000).animate({marginTop: "0"}, 1000);
}

