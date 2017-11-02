/* --------------------------------------------
  DOCUMENT.READY
--------------------------------------------- */
jQuery(document).ready(function(){
  'use strict';
 
  /* --------------------------------------------
    SEARCH
  --------------------------------------------- */
	//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
	var MqL = 1170;
	//move nav element position according to window width

	//open search form
	jQuery('.cd-search-trigger').on('click', function(event){
		event.preventDefault();
		toggleSearch();
	});

	function toggleSearch(type) {
		if(type=="close") {
			//close serach 
			jQuery('.cd-search').removeClass('is-visible');
			jQuery('.cd-search-trigger').removeClass('search-is-visible');
			jQuery('.cd-overlay').removeClass('search-is-visible');
		} else {
			//toggle search visibility
			jQuery('.cd-search').toggleClass('is-visible');
			jQuery('.cd-search-trigger').toggleClass('search-is-visible');
			jQuery('.cd-overlay').toggleClass('search-is-visible');
			if(windowT.width() > MqL && jQuery('.cd-search').hasClass('is-visible')) jQuery('.cd-search').find('input[type="search"]').focus();
			(jQuery('.cd-search').hasClass('is-visible')) ? jQuery('.cd-overlay').addClass('is-visible') : jQuery('.cd-overlay').removeClass('is-visible') ;
		}
	}

  /* --------------------------------------------
    EQUAL HEIGHTS
  --------------------------------------------- */
  //init equal height
  jQuery('.equal-height').equalHeights();

  /* --------------------------------------------
    SCROLL TO TOP
  --------------------------------------------- */
	// hide #back-top first
	jQuery("#back-top").hide();
			
	// fade in #back-top
	jQuery(function () {
		windowT.scroll(function () {
			if (jQuery(this).scrollTop() > 100) {
        jQuery('#back-top').fadeIn();
			} else {
				jQuery('#back-top').fadeOut();
			}
    });

    // scroll body to 0px on click
    jQuery('#back-top a').click(function () {
      jQuery('body,html').animate({
        scrollTop: 0
      }, 600);
      return false;
    });
  });
  
  /* --------------------------------------------
    TOGGLE
  --------------------------------------------- */
	jQuery('.toggle-view-custom li').click(function () {

		var text = jQuery(this).children('div.panel');

		if (text.is(':hidden')) {
			text.slideDown('10');
			jQuery(this).children('.ui-accordion-header').addClass('ui-accordion-header-active');		
		} else {
			text.slideUp('10');
			jQuery(this).children('.ui-accordion-header').removeClass('ui-accordion-header-active');		
		}

	});
 
  /* --------------------------------------------
    SMOOTH SCROLL TO 
  --------------------------------------------- */
  jQuery('a.smooth-scroll[href^="#"]').on('click', function(event) {

    var target = jQuery( jQuery(this).attr('href') );

    if( target.length ) {
      event.preventDefault();
      jQuery('html, body').animate({
        scrollTop: target.offset().top
      }, 600);
    }

  });

  /* --------------------------------------------
    JS NOT FOR MOBILE (PARALLAX, OPACITY SCROLL)
  --------------------------------------------- */
  if( mobileDetect == false ) {
    /* --------------------------------------------
      OPACITY SCROLL
    --------------------------------------------- */
    if ( jQuery('.opacity-scroll2').length ){  
      windowT.on('scroll', function() {
        jQuery('.opacity-scroll2').css('opacity', function() {
          return 1 - ((windowT.scrollTop() / windowT.height())*1.5);
        });
      });
    };
    
    /* --------------------------------------------
      PARALLAX
    --------------------------------------------- */
    if ( jQuery('.parallax-section').length ){
      jQuery.stellar({
        horizontalScrolling: false,
      }); 
    }; 
  
  }//END JS NOT FOR MOBILE
  
	/* --------------------------------------------
    SKILL BAR ANIMATION
  --------------------------------------------- */
	jQuery('.skillbar').appear(function(){  
		jQuery('.skillbar').each(function(){
			jQuery(this).find('.skillbar-bar').animate({
				width:jQuery(this).attr('data-percent')
			},2000);
		});
	});

  /* --------------------------------------------
    BOOTSTRAP JS
  --------------------------------------------- */
  //TOOLOTIPS INITIALIZE
	jQuery(function () {
	  jQuery('[data-toggle="tooltip"]').tooltip()
	});

  //POPOVER INITIALIZE	
	jQuery(function () {
	  jQuery('[data-toggle="popover"]').popover()
	});  
    
  // ACCORDION
  var accordPanels = jQuery(".accordion > dd").hide();
  
    accordPanels.first().slideDown("easeOutExpo");
    jQuery(".accordion > dt > a").first().addClass("active");
    
    jQuery(".accordion > dt > a").click(function(){
    
      var current = jQuery(this).parent().next("dd");
      jQuery(".accordion > dt > a").removeClass("active");
      jQuery(this).addClass("active");
      accordPanels.not(current).slideUp("easeInExpo");
      jQuery(this).parent().next().slideDown("easeOutExpo");
      
      return false;
            
  });
  
  // TOGGLE
  jQuery(".toggle > dd").hide();
  
  jQuery(".toggle > dt > a").click(function(){
  
      if (jQuery(this).hasClass("active")) {
      
          jQuery(this).parent().next().slideUp("easeOutExpo");
          jQuery(this).removeClass("active");
          
      }
      else {
          var current = jQuery(this).parent().next("dd");
          jQuery(this).addClass("active");
          jQuery(this).parent().next().slideDown("easeOutExpo");
      }
      
      return false;
  });
  
  /* --------------------------------------------
    FUNCTIONS
  --------------------------------------------- */
  jQuery("#loader3").fadeOut();
  jQuery("#loader-overflow").delay(200).fadeOut(1000);
  initMenu();
  initMagnPopup();
  initAffixCheck();
  initCounters();
  initPageSliders();
  initImgHeight();
  if ( jQuery('#items-grid').length ){
    initWorkFilter();
  };
  if ( jQuery('.masonry').length ){
    initMasonry();
  };
  if ( jQuery('.wow').length ){
    initWow(); 
  };
  
  //WINDOW RESIZE
  windowT.resize(function() {
    jQuery('.equal-height').css('height','auto').equalHeights();
    initAffixCheck();
    initImgHeight();
  }); 
  
});

/* --------------------------------------------
  HEADER MENU
--------------------------------------------- */
function initMenu() {
	'use strict';
  var $       = jQuery,
	  body    = jQuery('body'),
	  primary = '#main-menu';
  
  jQuery(primary).find('.parent > a .open-sub, .megamenu .title .open-sub').remove();
  
  jQuery(primary).find('.parent > a, .megamenu .title').append('<span class="open-sub"></span>');
	  
  jQuery(primary).on('click','.open-sub', function(event){	  
	event.preventDefault();
	
	var item = jQuery(this).closest('li, .box');
	
	if (jQuery(item).hasClass('active')) {
	  jQuery(item).children().last().slideUp(150);
	  jQuery(item).removeClass('active');
	} else {
	  var li = jQuery(this).closest('li, .box').parent('ul, .sub-list').children('li, .box');
	  
	  if (jQuery(li).is('.active')) {
		jQuery(li).removeClass('active').children('ul').slideUp(150);
	  }
	  
	  jQuery(item).children().last().slideDown(150);
	  jQuery(item).addClass('active');
	}
  });

   jQuery(primary).find('.parent > a').click(function(event){
	if ((body.width()  > 979) &&  (navigator.userAgent.match(/iPad|iPhone|Android/i))) {
	  var link = jQuery(this);
	  
	  if (link.parent().hasClass('open')) {
		link.parent().removeClass('open'),
		event.preventDefault();
	  } else {
		event.preventDefault();
		link.parent().addClass('open')
	  }
	}
  }); 

}

/* --------------------------------------------
  PLATFORM DETECT
--------------------------------------------- */

var htmlT    = jQuery('html'),
    windowT    = jQuery(window),
    ieDetect = false,
    mobileDetect = false,
    ua = window.navigator.userAgent,
    old_ie = ua.indexOf('MSIE '),
    new_ie = ua.indexOf('Trident/');
  
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)) {
    mobileDetect = true;
    htmlT.addClass('mobile');
  } else {
    htmlT.addClass('no-mobile');
  };   
  
  //IE Detect
  if ((old_ie > -1) || (new_ie > -1)) {
    ieDetect = true;
  };
  
/* --------------------------------------------
  PAGE LOADER
--------------------------------------------- */
jQuery("body").imagesLoaded(function(){
  //jQuery("#loader3").fadeOut();
  //jQuery("#loader-overflow").delay(200).fadeOut(700);
});

/* --------------------------------------------
  MAGNIFIC POPUP SETTINGS
--------------------------------------------- */
function initMagnPopup() {
	//Inline popups
		jQuery('#inline-popups').magnificPopup({
		  delegate: 'a',
		  removalDelay: 500, //delay removal by X to allow out-animation
		  callbacks: {
			beforeOpen: function() {
			   this.st.mainClass = this.st.el.attr('data-effect');
			}
		  },
		  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
		});

	//Image popups
		jQuery('.lightbox').magnificPopup({
		 // delegate: 'a',
		  type: 'image',
		  mainClass: 'mfp-3d-unfold',
		  removalDelay: 500, //delay removal by X to allow out-animation
		  callbacks: {
			beforeOpen: function() {
			  // just a hack that adds mfp-anim class to markup 
			   this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
			  // this.st.mainClass = this.st.el.attr('data-effect');
			}
		  },
		  closeOnContentClick: true,
		  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
		});

	//Hinge effect popup
		jQuery('a.hinge').magnificPopup({
		  mainClass: 'mfp-with-fade',
		  removalDelay: 1000, //delay removal by X to allow out-animation
		  callbacks: {
			beforeClose: function() {
				this.content.addClass('hinge');
			}, 
			close: function() {
				this.content.removeClass('hinge'); 
			}
		  },
		  midClick: true
		});
		
	//GALERY
		jQuery('.popup-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-3d-unfold',
		  removalDelay: 500, //delay removal by X to allow out-animation
		  callbacks: {
			beforeOpen: function() {
			  // just a hack that adds mfp-anim class to markup 
			   this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
			  // this.st.mainClass = this.st.el.attr('data-effect');
			}
		  },
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				/*titleSrc: function(item) {
					return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
				}*/
			}
		});
	
	//GALERY 2
		jQuery('.popup-gallery2').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-3d-unfold',
		  removalDelay: 500, //delay removal by X to allow out-animation
		  callbacks: {
			beforeOpen: function() {
			  // just a hack that adds mfp-anim class to markup 
			   this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
			  // this.st.mainClass = this.st.el.attr('data-effect');
			}
		  },
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				/*titleSrc: function(item) {
					return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
				}*/
			}
		});
    
	//MULTI GALERY 
		jQuery('.popup-multi-gallery').each(function() { // the containers for all your galleries
			jQuery(this).magnificPopup({
				delegate: 'a', // the selector for gallery item
				type: 'image',
				gallery: {
				  enabled:true
				}
			});
		});

	//VIDEO GMAPS POPUP
		jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			//disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
};	

/* --------------------------------------------
  FIXED HEADER ON - OFF
--------------------------------------------- */
function initAffixCheck(){
	'use strict';
  var navAffix = jQuery('#nav');  
  
  //FIXED HEADER ON
  navAffix.affix({
    offset: { top: 1, }
  });
  
  if((windowT.width() < 1025) ) {
    //FIXED HEADER OFF
    windowT.off('.affix');
    navAffix.removeData('bs.affix').removeClass('affix affix-top affix-bottom');
  }

}; 

/* --------------------------------------------
  WOW ANIMATE
--------------------------------------------- */
function initWow(){
  var wow = new WOW( { mobile: false, } );
  wow.init();
}

/* ---------------------------------------------
  COUNTER
--------------------------------------------- */
function initCounters(){
  jQuery(".count-number").appear(function(){
    var count = jQuery(this);
    count.countTo({
      from: 0,
      to: count.html(),
      speed: 1300,
      refreshInterval: 60,
    });
  });
}

/* ---------------------------------------------
 PORTFOLIO
--------------------------------------------- */
function initWorkFilter(){
  // Projects filtering
  var fselector = 0,
      itemsGrid = jQuery("#items-grid");
    
    (function($){
     "use strict";
     var isotopeMode;
     if (itemsGrid.hasClass("masonry")){
         isotopeMode = "masonry";
     } else{
         isotopeMode = "fitRows"
     }
     
     itemsGrid.imagesLoaded(function(){
            itemsGrid.isotope({
                itemSelector: '.mix',
                layoutMode: isotopeMode,
                filter: fselector
            });
        });
        
        jQuery(".filter").click(function(){
            jQuery(".filter").removeClass("active");
            jQuery(this).addClass("active");
            fselector = jQuery(this).attr('data-filter');
            
            itemsGrid.isotope({
                itemSelector: '.mix',
                layoutMode: isotopeMode,
                filter: fselector
            });
            return false;
        });
        
    })(jQuery);
}

/* ---------------------------------------------
 Height 100%  
 --------------------------------------------- */
function initImgHeight(){
  (function($){
    jQuery(".js-height-fullscr").height(jQuery(window).height());
  })(jQuery);
} 

/* ---------------------------------------------
  MASONRY
--------------------------------------------- */
function initMasonry(){
  (function($){    
  
    jQuery(".masonry").imagesLoaded(function(){
      jQuery(".masonry").masonry();
    });
    
  })(jQuery);
}

/* ---------------------------------------------
 OWL Sliders 
 --------------------------------------------- */
function initPageSliders(){
    (function($){
        "use strict";
        
        // FULLWIDTH SLIDER
        jQuery(".fullwidth-slider").owlCarousel({
            slideSpeed: 350,
            singleItem: true,
           // autoHeight: true,
            navigation: true,
            navigationText: ["<span class='icon icon-arrows-left'></span>", "<i class='icon icon-arrows-right'></span>"]
        });
       
        // CAROUSEL CLIENTS ITEMS
				jQuery("#owl-clients").owlCarousel({
				  //Set AutoPlay to 3 seconds
				  autoPlay : 6000,
				  items : 5,
				  itemsDesktop : [1199, 4], //5 items between 1000px and 901px
				  itemsDesktopSmall : [768, 3], // betweem 900px and 601px
				  itemsTablet: [480, 2], //2 items between 600 and 0
				  itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
					pagination : false,
					paginationNumbers: false,
				});
        
        // CAROUSEL CLIENTS AUTO PLAY 
			  jQuery(".owl-clients-auto").owlCarousel({
			 
				  //Set AutoPlay to 3 seconds
          autoPlay : 5000,
				  items : 5,
				  itemsDesktop : [1000,4], 
          itemsDesktopSmall : [900,3], 
          itemsTablet: [470,1], 
          itemsMobile : false, 
				  
				  //Pagination
					pagination : false,
					paginationNumbers: false,
			 
			  });
		 
        // CAROUSEL CLIENTS NO AUTO PLAY  
			  jQuery(".owl-clients-no-auto").owlCarousel({
			 
				  //Set AutoPlay to 3 seconds
          //autoPlay : 5000,
				  items : 5,
				  itemsDesktop : [1000,4],
          itemsDesktopSmall : [900,3], 
          itemsTablet: [470,1], 
          itemsMobile : false, 
				  
				  //Pagination
					pagination : true,
					paginationNumbers: false,
			 
			  });
		 
        // CAROUSEL 3 ITEMS NAV NO AUTO PLAY 
			  jQuery(".owl-3items-nav").owlCarousel({
			 
				  //Set AutoPlay to 3 seconds
          //autoPlay : 5000,
				  items : 4,
				  itemsDesktop : [1000,3], 
          itemsDesktopSmall : [900,2],
          itemsTablet: [470,1], 
          itemsMobile : false, 
				  
				  //Pagination
					pagination : false,
					paginationNumbers: false,
					
					// Navigation
					navigation : true,
					navigationText : ["<span class='icon icon-arrows-left'></span>", "<i class='icon icon-arrows-right'></span>"],
					rewindNav : true,
					scrollPerPage : false,
			 
			  });

        // CAROUSEL CLIENTS NAV NO AUTO PLAY
			  jQuery(".owl-clients-nav").owlCarousel({
			 
				  //Set AutoPlay to 3 seconds
          //autoPlay : 5000,
				  items : 5,
				  itemsDesktop : [1000,4], 
          itemsDesktopSmall : [900,3],
          itemsTablet: [470,1], 
          itemsMobile : false, 
				  
				  //Pagination
					pagination : false,
					paginationNumbers: false,
					
					// Navigation
					navigation : true,
					navigationText : ["<span class='icon icon-arrows-left'></span>", "<i class='icon icon-arrows-right'></span>"],
					rewindNav : true,
					scrollPerPage : false,
			 
			  });
		 
        // CAROUSEL ONE ITEM INLINE, NO CONTROLS, NO AUTO PLAY, WITH PAGINATION  
			  jQuery(".owl-1-pag").owlCarousel({
			 
				  //Set AutoPlay to 3 seconds
          //autoPlay : 5000,
				  items : 1,
				  itemsDesktop : [1000,1], 
					itemsDesktopSmall : [900,1], 
          itemsTablet: [470,1], 
          itemsMobile : false, 
				  
				  //Pagination
					pagination : true,
					paginationNumbers: false,
			 
			  });

        // CAROUSEL ONE ITEM INLINE, NO CONTROLS, AUTO PLAY, WITH PAGINATION
			  jQuery(".owl-1-pag-auto").owlCarousel({
			 
				  //Set AutoPlay to 3 seconds
          autoPlay : 5000,
				  items : 1,
				  itemsDesktop : [1000,1], 
					itemsDesktopSmall : [900,1], 
          itemsTablet: [470,1], 
          itemsMobile : false, 
				  
				  //Pagination
					pagination : true,
					paginationNumbers: false,
			 
			  });
 
        function center(number){
            var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
            var num = number;
            var found = false;
            for (var i in sync2visible) {
                if (num === sync2visible[i]) {
                    var found = true;
                }
            }
            if (found === false) {
                if (num > sync2visible[sync2visible.length - 1]) {
                    sync2.trigger("owl.goTo", num - sync2visible.length + 2)
                }
                else {
                    if (num - 1 === -1) {
                        num = 0;
                    }
                    sync2.trigger("owl.goTo", num);
                }
            }
            else 
                if (num === sync2visible[sync2visible.length - 1]) {
                    sync2.trigger("owl.goTo", sync2visible[1])
                }
                else 
                    if (num === sync2visible[0]) {
                        sync2.trigger("owl.goTo", num - 1)
                    }
        }
          
        var owl = jQuery(".fullwidth-slideshow").data("owlCarousel");
        
        jQuery(document.documentElement).keyup(function(event){
            // handle cursor keys
            if (event.keyCode == 37) {
                owl.prev();
            }
            else 
                if (event.keyCode == 39) {
                    owl.next();
                }
        });
        
        if (jQuery(".owl-carousel").lenth) {
            var owl = jQuery(".owl-carousel").data('owlCarousel');
            owl.reinit();
        }

    })(jQuery);
};


//WOW ANIMATE PLUGIN-------------------------------------------------------------------
/*! WOW - v1.1.2 - 2015-04-07
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.createEvent=function(a,b,c,d){var e;return null==b&&(b=!1),null==c&&(c=!1),null==d&&(d=null),null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e},a.prototype.emitEvent=function(a,b){return null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)?a["on"+b]():void 0},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.resetAnimation=f(this.resetAnimation,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new c,this.wowEvent=this.util().createEvent(this.config.boxClass)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],c=0,d=b.length;d>c;c++)f=b[c],g.push(function(){var a,b,c,d;for(c=f.addedNodes||[],d=[],a=0,b=c.length;b>a;a++)e=c[a],d.push(this.doSync(e));return d}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),this.util().emitEvent(a,this.wowEvent),this.util().addEvent(a,"animationend",this.resetAnimation),this.util().addEvent(a,"oanimationend",this.resetAnimation),this.util().addEvent(a,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(a,"MSAnimationEnd",this.resetAnimation),a},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.resetAnimation=function(a){var b;return a.type.toLowerCase().indexOf("animationend")>=0?(b=a.target||a.srcElement,b.className=b.className.replace(this.config.animateClass,"").trim()):void 0},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;d=[];for(c in b)e=b[c],a[""+c]=e,d.push(function(){var b,d,g,h;for(g=this.vendors,h=[],b=0,d=g.length;d>b;b++)f=g[b],h.push(a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=e);return h}.call(this));return d},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(h=d(a),g=h.getPropertyCSSValue(b),f=this.vendors,c=0,e=f.length;e>c;c++)i=f[c],g=g||h.getPropertyCSSValue("-"+i+"-"+b);return g},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);

//EQUAL HEIGHTS PLUGIN-------------------------------------------------------------------
   /*!
   * Simple jQuery Equal Heights
   *
   * Copyright (c) 2013 Matt Banks
   * Dual licensed under the MIT and GPL licenses.
   * Uses the same license as jQuery, see:
   * http://docs.jquery.com/License
   *
   * @version 1.6.0
   */
  !function(a){a.fn.equalHeights=function(){var b=0,c=a(this);return c.each(function(){var c=a(this).innerHeight();c>b&&(b=c)}),c.css("height",b)},a("[data-equal]").each(function(){var b=a(this),c=b.data("equal");b.find(c).equalHeights()})}(jQuery);
  
//SMOOTHSCROLL PLUGIN-------------------------------------------------------------------  
if (navigator.appVersion.indexOf("Win")!=-1) {

	// SmoothScroll for websites v1.2.1
	// Licensed under the terms of the MIT license.

	// People involved
	//  - Balazs Galambosi (maintainer)  
	//  - Michael Herf     (Pulse Algorithm)
!function(){function e(){var e=!1;e&&c("keydown",o),g.keyboardSupport&&!e&&u("keydown",o)}function t(){if(document.body){var t=document.body,r=document.documentElement,a=window.innerHeight,o=t.scrollHeight;if(x=document.compatMode.indexOf("CSS")>=0?r:t,w=t,e(),S=!0,top!=self)y=!0;else if(o>a&&(t.offsetHeight<=a||r.offsetHeight<=a)&&(r.style.height="auto",x.offsetHeight<=a)){var n=document.createElement("div");n.style.clear="both",t.appendChild(n)}g.fixedBackground||b||(t.style.backgroundAttachment="scroll",r.style.backgroundAttachment="scroll")}}function r(e,t,r,a){if(a||(a=1e3),d(t,r),1!=g.accelerationMax){var o=+new Date,n=o-T;if(n<g.accelerationDelta){var i=(1+30/n)/2;i>1&&(i=Math.min(i,g.accelerationMax),t*=i,r*=i)}T=+new Date}if(M.push({x:t,y:r,lastX:0>t?.99:-.99,lastY:0>r?.99:-.99,start:+new Date}),!C){var l=e===document.body,u=function(){for(var o=+new Date,n=0,i=0,c=0;c<M.length;c++){var s=M[c],d=o-s.start,f=d>=g.animationTime,p=f?1:d/g.animationTime;g.pulseAlgorithm&&(p=h(p));var m=s.x*p-s.lastX>>0,w=s.y*p-s.lastY>>0;n+=m,i+=w,s.lastX+=m,s.lastY+=w,f&&(M.splice(c,1),c--)}l?window.scrollBy(n,i):(n&&(e.scrollLeft+=n),i&&(e.scrollTop+=i)),t||r||(M=[]),M.length?E(u,e,a/g.frameRate+1):C=!1};E(u,e,0),C=!0}}function a(e){S||t();var a=e.target,o=l(a);if(!o||e.defaultPrevented||s(w,"embed")||s(a,"embed")&&/\.pdf/i.test(a.src))return!0;var n=e.wheelDeltaX||0,i=e.wheelDeltaY||0;return n||i||(i=e.wheelDelta||0),!g.touchpadSupport&&f(i)?!0:(Math.abs(n)>1.2&&(n*=g.stepSize/120),Math.abs(i)>1.2&&(i*=g.stepSize/120),r(o,-n,-i),void e.preventDefault())}function o(e){var t=e.target,a=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==H.spacebar;if(/input|textarea|select|embed/i.test(t.nodeName)||t.isContentEditable||e.defaultPrevented||a)return!0;if(s(t,"button")&&e.keyCode===H.spacebar)return!0;var o,n=0,i=0,u=l(w),c=u.clientHeight;switch(u==document.body&&(c=window.innerHeight),e.keyCode){case H.up:i=-g.arrowScroll;break;case H.down:i=g.arrowScroll;break;case H.spacebar:o=e.shiftKey?1:-1,i=-o*c*.9;break;case H.pageup:i=.9*-c;break;case H.pagedown:i=.9*c;break;case H.home:i=-u.scrollTop;break;case H.end:var d=u.scrollHeight-u.scrollTop-c;i=d>0?d+10:0;break;case H.left:n=-g.arrowScroll;break;case H.right:n=g.arrowScroll;break;default:return!0}r(u,n,i),e.preventDefault()}function n(e){w=e.target}function i(e,t){for(var r=e.length;r--;)z[N(e[r])]=t;return t}function l(e){var t=[],r=x.scrollHeight;do{var a=z[N(e)];if(a)return i(t,a);if(t.push(e),r===e.scrollHeight){if(!y||x.clientHeight+10<r)return i(t,document.body)}else if(e.clientHeight+10<e.scrollHeight&&(overflow=getComputedStyle(e,"").getPropertyValue("overflow-y"),"scroll"===overflow||"auto"===overflow))return i(t,e)}while(e=e.parentNode)}function u(e,t,r){window.addEventListener(e,t,r||!1)}function c(e,t,r){window.removeEventListener(e,t,r||!1)}function s(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function d(e,t){e=e>0?1:-1,t=t>0?1:-1,(k.x!==e||k.y!==t)&&(k.x=e,k.y=t,M=[],T=0)}function f(e){if(e){e=Math.abs(e),D.push(e),D.shift(),clearTimeout(A);var t=D[0]==D[1]&&D[1]==D[2],r=p(D[0],120)&&p(D[1],120)&&p(D[2],120);return!(t||r)}}function p(e,t){return Math.floor(e/t)==e/t}function m(e){var t,r,a;return e*=g.pulseScale,1>e?t=e-(1-Math.exp(-e)):(r=Math.exp(-1),e-=1,a=1-Math.exp(-e),t=r+a*(1-r)),t*g.pulseNormalize}function h(e){return e>=1?1:0>=e?0:(1==g.pulseNormalize&&(g.pulseNormalize/=m(1)),m(e))}var w,v={frameRate:150,animationTime:500,stepSize:150,pulseAlgorithm:!0,pulseScale:6,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!0,fixedBackground:!0,excluded:""},g=v,b=!1,y=!1,k={x:0,y:0},S=!1,x=document.documentElement,D=[120,120,120],H={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},g=v,M=[],C=!1,T=+new Date,z={};setInterval(function(){z={}},1e4);var A,N=function(){var e=0;return function(t){return t.uniqueID||(t.uniqueID=e++)}}(),E=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e,t,r){window.setTimeout(e,r||1e3/60)}}(),K=/chrome/i.test(window.navigator.userAgent),L="onmousewheel"in document;L&&K&&(u("mousedown",n),u("mousewheel",a),u("load",t))}();
};
//SMOOTHSCROLL END-------------------------------------------------