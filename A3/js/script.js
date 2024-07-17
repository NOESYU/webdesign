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


/* 서브메뉴 종류
  1. 가로
    1) 그부분만 나오게 <- A3 유형
    2) 배경이랑 함께 다같이 나오게
  2. 세로
    1) 아래로 나오게
    2) 옆으로 나오게
    3) 옆으로 크기가 커지고 나오게 */

/* 서브메뉴구현
  1. 서브메뉴 숨기기
  2. 메뉴에 mouseover/mouseout될때 그 li의 children 만 보이거나 사라짐
    - fadeIn(시간(ms)) : 서서히 나타나게
    - slideDown(시간(ms)) : 아래로 펼쳐지면서 나타남
    - fadeOut(시간(ms)) : 서서히 사라지게
    - slideUp(시간(ms))
  3. mouse 메뉴는 stop() 을 필수로 적어줘야함.
*/
$(".submenu").hide();
$(".menu>li").mouseover(function(){
  $(this).children(".submenu").stop().fadeIn();
})
$(".menu>li").mouseout(function(){
  $(this).children(".submenu").stop().fadeOut(); 
})