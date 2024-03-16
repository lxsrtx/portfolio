$(document).ready(function () {
    function animateText() {
        $('.scroll-text:first-child').animate({
            'margin-left': '-=' + $('.scroll-container').width()
        }, 5000, 'linear', function () {
            $(this).css('margin-left', $('.scroll-container').width());
            $(this).appendTo('.scroll-container');
        });

        $('.scroll-text:last-child').animate({
            'margin-left': '-=' + ($('.scroll-container').width() * 2)
        }, 10000, 'linear', function() {
            $(this).css('margin-left', $('.scroll-container').width());
            animateText();
        });
    }

    animateText();
});


