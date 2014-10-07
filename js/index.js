$('.scrollLink').on("click", function(event){
	event.preventDefault();
	$.scrollTo($(event.target.hash), 500);
});

$('.img-holder').imageScroll({
	coverRatio: 0.35
});

$('.img-holder2').imageScroll({
	coverRatio: 0.20
});