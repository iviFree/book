var toggleMobileMenu = function (item) {
    $('#' + item).fadeToggle(500, "swing");
};
$(function () {
    var header = $("#fullNav");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            header.addClass("shadowMenu");
        } else {
            header.removeClass("shadowMenu");
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    new Typed('#typing', {
        strings: ['A UI Developer', 'A Front End Developer', 'A Web Designer', 'A Digital Art Director'],
        typeSpeed: 180,
        backSpeed: 80,
        shuffle: false,
        startDelay: 1500,
        cursorChar: '_',
        smartBackspace: true,
        backDelay : 4000, 
        loop: true
    });
});
