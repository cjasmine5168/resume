$.fn.isFullyInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementTop >= viewportTop && elementBottom <= viewportBottom;
};
jQuery(document).ready(function () {
    animateProgressBar();
});

$(window).on('resize scroll', function () {
    animateProgressBar();
});

var animateProgressBar = function () {
    $('.pskillbar').each(function () {
        if ($(this).isFullyInViewport()) {
            jQuery(this).find('.pskillbar-bar').animate({
                width: jQuery(this).attr('data-percent')
            }, 600);
        }
    });
}