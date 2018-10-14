$(document).on("mousemove", function (event) {
	
	$("img.lizard").css("width", event.pageX)
	$("img.lizard").css("height", event.pageY)

	$("img.people").css("width"), $(window).width() - event.pageX)
	$("img.people").css("height", event.pageY)

	$("img.coming").css("width"), event.pageX)
	$("img.coming").css("height"), $(window).height() - event.pageY)

	$("img.soon").css("width"), $(window).width() - event.pageX)
	$("img.soon").css("height", $(window).height() - event.pageY)


})
