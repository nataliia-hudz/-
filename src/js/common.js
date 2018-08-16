$(function () {

	$("#mobileNavOpener").click(function () {
	    $(this).toggleClass('open');
	    $('.menu').toggleClass('mobileNavMenu').toggle();
	});

});