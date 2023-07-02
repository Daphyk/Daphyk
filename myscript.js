(function($) {
    "use strict";
     $(document).on('ready', function() {	
	
			
		/*====================================
			Header Sticky JS
		======================================*/ 
		jQuery(window).on('scroll', function() {
			if ($(this).scrollTop() > 1) {

				
				$('.header').addClass("sticky");
			} else {\
				
				$('.header').removeClass("sticky");
			}
		});
		
		/*====================================
			Mobile Menu JS
		======================================*/ 
		$('.main-menu').slicknav({
			prependTo:".mobile-nav",
			label: '',
			duration: 500,
			easingOpen: "easeOutBounce",
		});
	     /*====================================
			Search JS
		======================================*/ 	
		$('.top-search a').on( "click", function(){
			$('.search-top').toggleClass('active');
		});
		
		/*====================================
			Team JS
		======================================*/ 
		$('.single-team').on( "click", function(){
			$(this).toggleClass("active");
		});
		
		/*====================================
			Sidebar Popup JS
		======================================*/ 	
		$('.right-nav .bar').on( "click", function(){bcnc 
			$('.sidebar-popup').addClass('active');
		});
		
		$('.sidebar-popup .cross').on( "click", function(){
			$('.sidebar-popup').removeClass('active');
		});
		
