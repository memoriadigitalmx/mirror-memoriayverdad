jQuery(document).ready(function() {
			
	//NAV SIDEBAR------------------------------------------------------------------
		var top_offset = jQuery('header').height() - 1;  // get height of fixed navbar

		jQuery('#nav-sidebar').onePageNav({
			currentClass: 'current',
			changeHash: false,
			scrollSpeed: 700,
			scrollOffset: top_offset,
			scrollThreshold: 0.5,
			filter: '',
			easing: 'swing',
			begin: function() {
				//I get fired when the animation is starting
			},
			end: function() {
				//I get fired when the animation is ending
			},
			scrollChange: function($currentListItem) {
				//I get fired when you enter a section and I pass the list item of the section
			}
		});

	//SIDEBAR STICKY---------------------------------------------	  
		var //offsetSb = jQuery('.page-title-bg').height(),
			offsetFooter = jQuery('#footer-offset').height()+30;
			// DM Menu
		jQuery('#sidebar-stiky').affix({
			offset: { top: 300, //top offset for header 1 for others headers it will have other value
				bottom: offsetFooter		
			}
		});

});
jQuery(document).ready(function() {
	//ONE PAGE NAV	---------------------------------------------------------------------------
		var top_offset = jQuery('header').height() - 1;  // get height of fixed navbar

		jQuery('#nav-onepage').onePageNav({
			currentClass: 'current',
			changeHash: false,
			scrollSpeed: 700,
			scrollOffset: top_offset,
			scrollThreshold: 0.5,
			filter: '',
			easing: 'swing',
			begin: function() {
				//I get fired when the animation is starting
			},
			end: function() {
				//I get fired when the animation is ending
			},
			scrollChange: function($currentListItem) {
				//I get fired when you enter a section and I pass the list item of the section
			}
		});

});//END document.ready  