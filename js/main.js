$(document).ready(function(){

	$('.radio-btn').click(function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
		} else {
			$(this).removeClass('error');
			$(this).addClass('active');
		}
	});

	$('.mobile-btn-wrap').click(function(){
		if ( $(this).hasClass('active') ){
			$(this).removeClass('active');
			$('.mobile-menu').removeClass('active');
			$('body').removeClass('no-scroll');
		} else {
			$(this).addClass('active');
			$('.mobile-menu').addClass('active');
			$('body').addClass('no-scroll');
		}
	});

	$('.fancybox-gal').fancybox({loop: true});
	$('.fancybox').fancybox({touch: false});
	$('input[type="tel"]').inputmask('+7 (999) 999-99-99');

	$('.close-btn').click(function(){
		$('.mobile-btn-wrap').removeClass('active');
		$('.mobile-menu').removeClass('active');
		$('body').removeClass('no-scroll');
	});

	$('input').on('input',function(){
		$(this).removeClass('error');
	});
	$('textarea').on('input',function(){
		$(this).removeClass('error');
	});

	$('form button[type="submit"]').click(function(){
		if ( $(this).parents('form').find('.policy-text .radio-btn').hasClass('active') ) {
			$(this).parents('form').find('input').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault(); 
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				}
			});
			$(this).parents('form').find('textarea').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault(); 
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				} 
			});
		} else {
			$(this).parents('form').find('.policy-text .radio-btn').addClass('error');
			event.preventDefault();
		}
	});

	$('.b-select select').on('focus',function(){
		$(this).parents('.b-select').addClass('focus');
	});

	$('.b-select select').on('blur',function(){
		$(this).parents('.b-select').removeClass('focus');
	});

	$('.b-select select').on('change',function(){
		$(this).blur();
	});

	$('.banner-slider').slick({
		arrows: false,
		fade: true,
		autoplay: true,
		speed: 500
	});

	function burgerScroll(){
		var gs = $('.header-burger').offset().top - 10;
		var st = $(window).scrollTop();

		if ( st > gs ){
			$('.header-burger').find('.mobile-btn-wrap').addClass('scroll');
		} else {
			$('.header-burger').find('.mobile-btn-wrap').removeClass('scroll');
		}
	}
	burgerScroll();

	$(window).on('scroll',function(){
		burgerScroll();
	});

	$(window).resize(function(){
		burgerScroll();
	});

});