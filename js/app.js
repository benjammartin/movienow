(function($){

/* disabel 

	$('#icon').click(function(e){
		e.preventDefault();
		$('body').toggleClass('sidebar').addClass('active');
	});
	 */

	$('#cache').click(function(e){
		e.preventDefault();
		$('body').removeClass('sidebar').removeClass('active');
});





var $movie = $('.movie');

$("#load-more").click(function() {
    
   

    var $hidden = $movie.filter(':hidden:first').addClass('active');
    if (!$hidden.next('.movie').length) {
        $(this).addClass('disable');
    }
});

})(jQuery);


