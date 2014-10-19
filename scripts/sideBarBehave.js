

$(window).scroll(function(event) {
	$("#leftFloater").css("margin-left", 1-$(document).scrollLeft());
	$("#leftFloater").css("top", 101-$(document).scrollTop());

	var barHeight = 101-$(document).scrollTop();
						
	if (barHeight < 2) {
		$("#leftFloater").css("top", "2px");
	} 
});