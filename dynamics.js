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

$("#currentYear").html(new Date().getFullYear());

$(".definition p").prepend("<b>Definition. </b>");
$(".example p").prepend("<b>Example. </b>");
$(".solution p").prepend("<b>Solution. </b>");
$(".theorem p").prepend("<b>Theorem. </b>");
$(".proof p").prepend("<b>Proof. </b>");
$(".proof p").append("<div class=\"qed\"></div>");


$('.maths').each(function() {
    var text = $(this).text();
    $(this).text(text.replace('(n appr inf)', '\\(n \\to \\infty\\)'));
});

$('.maths').each(function() {
    var text = $(this).text();
    $(this).text(text.replace('(let eps)', '\\(\\varepsilon > 0\\)')); 
});