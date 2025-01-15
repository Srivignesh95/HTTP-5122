//LAB 10 - 2 INVENTORY PAGE

$(window).on("load",function(){

	$('.desc').addClass('text_hide');




	//ADD <tr> MOUSEOVER and MOUSEOUT FUNCTIONS 
	$('tr').hover(function() {
		$(this).addClass('selected');
	}, function() {
		$(this).removeClass('selected');
	});




	//ADD <tr> CLICK LISTENER 
	$('tr').on('click', function(){
		$(this).find('.desc').addClass('text_show');
		$('.desc').not($(this).find('.desc')).removeClass('text_show');
	})

});

