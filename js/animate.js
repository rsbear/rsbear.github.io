



$('.nav-mobile-btn').click(function() {
	$('.footer-mask, .nav-wrapper, .main-nav, .links').toggleClass('NavOpen');
});


$(window).scroll(function () {
    $('.mid-title, .flex-grid-wrapper').each(function () {
        var topOfWindow = $(window).scrollTop();

        if (topOfWindow) {
            $(this).addClass("FadingIn");
        } else {
            $(this).removeClass("FadingIn");
        }
    });
});