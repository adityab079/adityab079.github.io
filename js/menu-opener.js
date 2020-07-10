// $(".menu-opener").click(function () {
//     $(".menu-opener, .menu-opener-inner, .menu").toggleClass("active");
// });

$(".menu-link").click(function () {
    var targetSelector = $(this).attr("href");
    $("html, body").animate(
        {
            scrollTop: $(targetSelector).offset().top - 60,
        },
        1500
    );
    console.log({ targetSelector });
});
console.log("menu");
// ====================================================================
$(".js-nav").click(function () {
    $(this).parent().find(".menu").toggleClass("active");
});

$(".toggle-nav").click(function () {
    $(this).toggleClass("animate");
});
// ====================================================================

$("#button1").on("click", function () {
    $("#c1").toggleClass("flip");
});
$("#button2").on("click", function () {
    $("#c1").toggleClass("flip");
});

$("#button3").on("click", function () {
    $("#c2").toggleClass("flip");
});
$("#button4").on("click", function () {
    $("#c2").toggleClass("flip");
});

$("#button5").on("click", function () {
    $("#c3").toggleClass("flip");
});
$("#button6").on("click", function () {
    $("#c3").toggleClass("flip");
});
