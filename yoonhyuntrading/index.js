$(document).ready(function () {

    /* header */
    $("header .menu_box .menu_wrap>li").mouseenter(function () {
        $(this).find("ul.sub").fadeIn();
    });
    $("header .menu_box .menu_wrap>li").mouseleave(function () {
        $(this).find("ul.sub").fadeOut();
    });
});

/* 슬라이드 */
function SliderBox1__init() {
    $(".slide_wrap .slick").slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: ".slide .slick_btn .btn_left",
        nextArrow: ".slide .slick_btn .btn_right",
    });
}
$(function () {
    SliderBox1__init();
});
/* 종합 메뉴 클릭 */
$(".r_menu_box .total_menu").on("click", function () {
    $(".total_header").fadeIn();
});
$(".total_header .t_right .t_delete").on("click", function () {
    $(".total_header").fadeOut();
})