$(".popup_bg").hide();
$(".notice>li:nth-child(1)").click(function(){
  $(".popup_bg").show();
});
$(".close").click(function(){
  $(".popup_bg").hide();
});

$(".submenu").hide();
$(".menu>li").mouseover(function(){
  $(this).children(".submenu").stop().slideDown();
})
$(".menu>li").mouseout(function(){
  $(this).children(".submenu").stop().slideUp();
})