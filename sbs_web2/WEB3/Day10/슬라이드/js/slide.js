$(".slider").slick({
    infinite : true, //무한반복옵션  false/true
    speed : 1000, //다음 슬라이드가 나오는데까지 걸리는 시간(슬라이드되는 시간)
    autoplay : false, //자동 재생
    pauseOnHover : false, //슬라이드에 마우스 호버하면 자동재생 멈춤 설정
    autoplaySpeed : 3000, //자동 재생시 속도(다음 이미지로 넘어갈때 걸리는 시간) = 3초에 한번씩 다음이미지로 넘어간다.
    vertical : false, //세로 방향 슬라이드 옵션
    draggable : false, //드래그 설정 멈추기
    dots : true, //슬라이드 페이지네이션 옵션
    arrows : true, //previous & next 버튼 옵션
    slidesToShow : 4,  //한 화면에 보여질 슬라이드 개수 
    slidesToScroll : 2, //한번에 슬라이드되는 콘텐츠 개수
    fade : true, // 페이드 효과 옵션(slideTosShow의 개수가 1개일 때만 사용 가능)

    responsive : [ //반응형 슬라이드 옵션
    {
       breakpoint : 1400, //화면 사이즈 1400px
       settings: {
        slidesToShow : 2, 
        slidesToScroll : 2,
       }
    },
    {
        breakpoint : 1000, //화면 사이즈 1400px
        settings: {
         slidesToShow : 1, 
         slidesToScroll : 1,
        }
     },
];
   

});

$(".slider2").slick({
    speed:1000,
    slidesToShow : 4,  //한 화면에 보여질 슬라이드 개수 
    slidesToScroll : 2, //한번에 슬라이드되는 콘텐츠 개수
    dots : true,
    arrows : true,
    prevArrow : $(".slider2_prev"),//previous 버튼의 class 지정
    nextArrow : $(".slider2_next"),//next 버튼의 class 지정
    dotsClass :  "slider2+dots"

});
