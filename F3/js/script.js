// 한번에 쓰기 : $(".submenu, .sub_bg").hide();
$(".submenu").hide();
$(".sub_bg").hide();

$(".menu").mouseover(function(){
  $(".submenu").stop().fadeIn();
  $(".sub_bg").stop().fadeIn();
})
$(".menu").mouseout(function(){
  $(".submenu").stop().fadeOut();
  $(".sub_bg").stop().fadeOut();
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

// slide script code
// 반복 : setInterval(코드(함수), 시간)
setInterval(slide); // 호출

function slide(){ // 함수정의
  // animate({속성}, 시간)
  $(".slide").delay(2000).animate({marginLeft:"-100%"}, 1000);
  $(".slide").delay(2000).animate({marginLeft:"-200%"}, 1000);
  $(".slide").delay(2000).animate({marginLeft:"0%"}, 1000);
}