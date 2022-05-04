$(document).ready(function() {
    $('#navigationAlternative').on('click', function() {
        $('aside').show();
    });

    $('#close').on('click', function() {
        $('aside').hide();
    });
});

$(window).resize(function() {
    if ($(window).width() >= 1024) {
        $('aside').hide();
    }
});