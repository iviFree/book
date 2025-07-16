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
        strings: ['Desarrollador UI', 'Desarrollador Front End','Diseñador web', 'Director de arte digital'],
        typeSpeed: 180,
        backSpeed: 80,
        shuffle: true,
        startDelay: 1500,
        cursorChar: '_',
        smartBackspace: false,
        backDelay: 4000,
        loop: true
    });
});
