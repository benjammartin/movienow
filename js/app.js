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

$( '#tab a ' ).on( 'click', function() {
            $( this ).parent().find( 'a.active' ).removeClass( 'active animated fadeIn' );
            $( this ).addClass( 'active' ).addClass('animated fadeIn');

      });


	$('#tab').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('#tab').removeClass('current');
		$('.container.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

		

var $movie = $('.movie');

$("#load-more").click(function() {
    
   

    var $hidden = $movie.filter(':hidden:first').addClass('active');
    if (!$hidden.next('.movie').length) {
        $(this).addClass('disable');
    }
});

})(jQuery);

