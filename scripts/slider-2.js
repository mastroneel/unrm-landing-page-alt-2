jQuery(document).ready(function ($) {

setInterval(function () {
moveRight();
}, 5000);

var slideCount = $('#slider-2 ul li').length;
var slideWidth = $('#slider-2 ul li').width();
var slideHeight = $('#slider-2 ul li').height();
var sliderUlWidth = slideCount * slideWidth;

$('#slider-2').css({ width: slideWidth, height: slideHeight });

$('#slider-2 ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

$('#slider-2 ul li:last-child').prependTo('#slider-2 ul');

function moveLeft() {
$('#slider-2 ul').animate({
    left: + slideWidth
}, 500, function () {
    $('#slider-2 ul li:last-child').prependTo('#slider-2 ul');
    $('#slider-2 ul').css('left', '');
});
};

function moveRight() {
$('#slider-2 ul').animate({
    left: - slideWidth
}, 500, function () {
    $('#slider-2 ul li:first-child').appendTo('#slider-2 ul');
    $('#slider-2 ul').css('left', '');
});
};

$('a.control_prev').click(function () {
moveLeft();
});

$('a.control_next').click(function () {
moveRight();
});

});
