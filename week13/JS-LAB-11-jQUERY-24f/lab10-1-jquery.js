//LAB 10 - 1 FAQ PAGE

//Use jQuery to wait for page load
$(window).on("load",function(){


	//Inside of here is your jQuery/JavaScript


	//ADD CLICK EVENT TO <h2>
	$('.textbox').addClass('text_hide');

	$('h2').on("click", function() {
		$(this).next('.textbox').slideToggle(3000);
		$('.textbox').not($(this).next('.textbox')).slideUp(3000);
	});
		
	
	
	//CHANGE <p> BACKGROUND COLOUR ON HOVER
	$('p').hover(
		function () {
		  $(this).addClass('textbox_hover');
		},
		function () {
		  $(this).removeClass('textbox_hover');
		}
	  );
	  

});



