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
var lastId,
    topMenu = $("#navv"),
    topMenuHeight = topMenu.outerHeight() + 1,
    menuItems = topMenu.find("nav ul li a"),
    scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
        if (item.length) {
            return item;
        }
    });

// Bind to scroll
$(window).scroll(function () {
    var fromTop = $(this).scrollTop() + 150 + topMenuHeight;

    var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop) return this;
    });
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        menuItems
            .parent()
            .removeClass("current")
            .end()
            .filter("[href=#" + id + "]")
            .parent()
            .addClass("current");
    }
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
