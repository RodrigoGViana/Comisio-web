$(function() {
  smoothScroll(300);
  tallerBelt();
  tallerLoad();
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

function tallerLoad() {

  $.ajaxSetup({cache: false});

  $('.thumb-unit').click(function() {
      var $this=$(this),
          newTitle=$this.find('strong').text(),
          newFolder=$this.data('folder'),
          spinner='<div class="loader">Loading...</div>',
          newHTML='/Talleres/'+ newFolder +'.html';
      $('.taller-load').html(spinner).load(newHTML);
      $('.titulo-taller').text(newTitle)
  });
}
