$('.scrollLink').on("click", function(event){
	event.preventDefault();
	$.scrollTo($(event.target.hash), 500);
});