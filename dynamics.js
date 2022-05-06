$(document).ready(function() {
    $('#navigationAlternative').on('click', function() {
        $('aside').show();
        $('body').css({"overflow": "hidden"});
    });

    $('#close').on('click', function() {
        $('aside').hide();
        $('body').css({"overflow": "visible"});
    });
});

$(window).resize(function() {
    if ($(window).width() >= 1024) {
        $('aside').hide();
    }
});