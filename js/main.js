"use strict";
/**************Loading Screen************/
$(document).ready(function () {
    $(".loader").fadeOut(500, function () {
        $(".loadingScreen").fadeOut(500, function () {
            $("body").css("overflow", "auto");
            $(".loadingScreen").remove();
        })

    })
})
/**************navbar background Color when scroll************/

$(window).scroll(function () {
    let windowScroll = $(window).scrollTop();    
    if (windowScroll > 50 ) {
        $(".navbar").css("backgroundColor", "#fff");
        $("nav a").css("color", " #686868 ");
        $(".navbar img").attr("src", "images/bakery-color.png");
    } else {
        $(".navbar").css("backgroundColor", "transparent");
        $("nav a").css("color", "#fff");
        $(".navbar img").attr("src", "images/bakery-light-1.png");
    }

})
/****************************************************************/

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelector('.navbar-collapse').classList.remove('show');
        $(".navbar-toggler i").removeClass("fa-xmark").addClass("fa-bars");
    });
});

$(".navbar-toggler").click(function () {
    if ($(".navbar-toggler i").hasClass("fa-bars")) {
        $(".navbar-toggler i").removeClass("fa-bars").addClass("fa-xmark");
    } else {
        $(".navbar-toggler i").removeClass("fa-xmark").addClass("fa-bars");
    }
});

/************** scroll To section by href ************/

$("a[href^='#']").click(function (eventInfo) {
    let aHref = eventInfo.target.getAttribute("href");
    let sectionOffset = $(aHref).offset().top;
    $("html,body").animate({ scrollTop: sectionOffset }, 500);
})
/**************arrow Up************/

$(window).scroll(function () {
    let windowScroll = $(window).scrollTop();
    if (windowScroll > 50) {
        $(".arrowUP").fadeIn(500);
    } else {
        $(".arrowUP").fadeOut(500);
    }
})
$(".arrowUP").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 500);
})

