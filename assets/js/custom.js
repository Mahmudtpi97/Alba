(function ($){ 

 $(document).ready(function() {

 	$('.menu-area ul li a').click(function(){
		$('html, body').animate({
		scrollTop: $( $(this).attr('href') ).offset().top
		}, 500);
		return false;
		});


  // Humber Menu Icon Js
   $('.all-p-humber').click(function(){
    $(this).toggleClass('open');
  });
   $('.mobile-menu-icon').click(function(){
  	$('.menu-area ul').animate({
      width:'toggle'
    },300);
  });
});

  })(jQuery);