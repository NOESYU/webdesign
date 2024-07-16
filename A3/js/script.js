/* 팝업창 구현
  1. 팝업창 숨기기
  2. 공지사항 첫번째 콘텐츠 클릭시 팝업창 보이기
  3. 닫기버튼 클릭시 팝업창 숨기기*/
$(".popup").hide();
$(".notice>li:nth-child(1)").click(function(){
  $(".popup").show();
});
$(".close").click(function(){
  $(".popup").hide();
})

/* 공지사항/갤러리 탭 변경
  1. 처음엔 갤러리 숨기기
  1. tab_title 클릭시 child(2)갤러리보이기, child(1)공지숨기기
  2. 액티브 클래스 추가/삭제
*/
$(".gallery").hide();

$(".tab_title>li:nth-child(2)").click(function(){
  $(".gallery").show();
  $(".notice").hide();
  // this: 클릭된 그거, .siblings: 형제접근
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
});
$(".tab_title>li:nth-child(1)").click(function(){
  $(".notice").show();
  $(".gallery").hide();
  // this: 클릭된 그거, .siblings: 형제접근
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
});