//////////////////////////////////////////////////
// back-to-top button
$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $('#top').fadeIn(300)
        } else {
            $('#top').fadeOut(300)
        }
    });
    $('#top').click(function () {
        $('body,html').animate({ scrollTop: 0 });
    });
});
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// writing tabs
//////////////////////////////////////////////////