$(".popup_bg").hide();
$(".notice>li:nth-child(1)").click(function(){
  $(".popup_bg").show();
});
$(".close").click(function(){
  $(".popup_bg").hide();
});

$(".submenu, .sub_bg").hide();
$(".menu>li").mouseover(function(){
  $(".submenu, .sub_bg").stop().fadeIn();
});
$(".menu>li").mouseout(function(){
  $(".submenu, .sub_bg").stop().fadeOut();
});