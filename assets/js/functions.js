$(function() {
  smoothScroll(300);
  tallerBelt();
  //
});

// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

function tallerBelt() {
  $(".thumb-unit").click(function() {
    $(".taller-belt").css('left', '-100%');
    $(".info-taller").show();
  });

  $(".taller-return").click(function() {
    $(".taller-belt").css('left', '0%');
    $(".info-taller").hide(800);
  });
}
