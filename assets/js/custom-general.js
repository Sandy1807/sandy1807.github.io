// To setup the template, change the variables below
// Follow instructions in code comments or see documentation for more detail

//  1. Configurations or Settings
//  2. Navigation on click/ on load / on hasch chage scroll to 
// 	3. Menu / Internal / Exteranl links  
//	4. General Sections
//	5. Contact Form Start
//	6. Home page Promotions Sections
//	7. Portfolio on mouseover opactiy
//	8. My Skills Section 
//	9. Custom  Functions Section


// On Document Ready initialise the options 
jQuery(document).ready(function($){
"use strict"; 

/*****************************************************************************
			1. Configurations or Settings
******************************************************************************/

		//Scroll speed and page animation Scrollto.js parameter
		
		var horizontal_scroll_speed=parseInt("2000", 10); // speed Horizontal Scrollto parameter default #1200
		
		//content scrollbar (niceScroll) colour 
		var niceScrollcursorcolor = "#7A9B9E"// Set your content niceScroll color here!
		var niceScrollscrollspeed = parseInt("100", 10);  // Set niceScroll speed, default value is 60
	 	var niceScrollmousescrollstep = parseInt("80", 10);  // Set niceScroll speed with mouse wheel, default value is 40
		var	niceScrollcursorwidth =  "12px"	// Set cursor width in pixel, default is 5
		var	niceScrollcursorborderradius = "20px"  // Set niceScroll border radiuzxcs for cursor, default is "4px"
		var	niceScrollbackground = "#e9e9e9"  // Set your niceScroll rails background color
		var	niceScrollhidecursordelay = parseInt("200", 10); // Set your niceScroll rails background color
		
		
/********************** 1. Configuration / Settings END**********************/

/******************************************************************************
		  	2. Preloader
******************************************************************************/

//Preloader
		$("body").jpreLoader({
				splashID:"#jSplash",
				showPercentage:!0,
				autoClose:!0,
				showSplash: true,
				splashFunction:function(){
				$("#circle").delay(1250).animate({opacity:1},700,"linear");		
			 	 }
			   }, function() {
				  	homepageAnimation();
			 });
//Preloader end


/******************************************************************************
		  	3. Navigation on click/ on load / on hash change scroll to 
******************************************************************************/

$(".navbar .dropdown").on({
    mouseenter: function () {
        $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
		$(this).toggleClass('open'); 
    },
    mouseleave: function () {
        	$('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
		$(this).toggleClass('open'); 
    }
});


/* // Bootstrap DropDown Menu Hover */



/***************************************************
		  		4. slicknav / Internal / Exteranl links  
***************************************************/

// Slick navigation for mobile / tablet purpose

// For HOme Page Navigation
$(function(){
	$('#home_scroll').slicknav({
	label: '',
	duration: 1000,
	easingOpen: "easeOutQuint", //available with jQuery UI
	closeOnClick:true,
	prependTo:"#menutop .container",

});
});

// For Sub Page Navigation
$(function(){
	$('#sub-nav').slicknav({
	label: '',
	duration: 1000,
	easingOpen: "easeOutQuint", //available with jQuery UI
	closeOnClick:true,
	prependTo:"#menutop .container",

});
});

// on hash change 
window.onhashchange = function() {
$('.selected').removeClass('selected');

var hash = window.location.hash;
if (hash!=""){
$( "a[href='"+hash+"']" ).addClass('selected');
}}

// on click navigation add class selected
$("#sub-menu ul.nav li a").on("click",function () {
	$('ul.nav li a').removeAttr('class');
	$(this).attr('class', 'nav-link selected ');
	});
// on external and internal page link 

// External Link use e-link
$('a.e-link').on("click",function () {
 return !window.open(this); 
 }); 

// Internal Link use i-link
$('a.i-link').on("click",function () {
var name = $(this).attr('href');
window.location.href = name;
}); 

/******************	4. slicknav / Internal / Exteranl links  ******************/



/*************************************************************
		  		4. General Sections
**************************************************************/

// niceScroll Bar options

		// niceScroll Bar options for Desktop version
		$(".contentscroll").niceScroll({
		cursorcolor:niceScrollcursorcolor,
		scrollspeed:niceScrollscrollspeed,
		mousescrollstep:niceScrollmousescrollstep,
		smoothscroll:true,
		cursorwidth:niceScrollcursorwidth,
		cursorborder:0, 
		cursordragontouch:true,
		cursorborderradius:niceScrollcursorborderradius,
		autohidemode:true,
		background: niceScrollbackground,
		hidecursordelay:niceScrollhidecursordelay,
		horizrailenabled:false
		});
		$(".contentscroll").mouseover(function() {
		$(".contentscroll").getNiceScroll().resize();
		});
		
		$(".contentscroll-mobile").niceScroll({
				cursorcolor:niceScrollcursorcolor,
		scrollspeed:niceScrollscrollspeed,
		mousescrollstep:niceScrollmousescrollstep,
		smoothscroll:true,
		cursorwidth:niceScrollcursorwidth,
		cursorborder:0, 
		cursordragontouch:true,
		cursorborderradius:niceScrollcursorborderradius,
		autohidemode:true,
		background: niceScrollbackground,
		hidecursordelay:niceScrollhidecursordelay,
		horizrailenabled:false
		});
		$(".contentscroll-mobile").mouseover(function() {
		$(".contentscroll-mobile").getNiceScroll().resize();
		});
// niceScroll Bar options end



// Home page Social on mouse over slide up / down
		jQuery(function($){
				$('.accura-jump a,' +
				'.accura-jump-bg a').each(function () {
					var $el = $(this);
					$el.append($el.find('i').clone());
				});
		$('.accura-social-icons-big a i').wrap('<span></span>');
		});

// Home page Social on mouse over END

// delegate calls to data-toggle="lightbox"
		$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
		event.preventDefault();
		return $(this).ekkoLightbox({
		always_show_close: true
		});
		});
// Light Box

 // Modal Body Scroll Hide
	 jQuery('.modal').on('show.bs.modal', function () {
		
        if (jQuery(document).height() > jQuery(window).height()) {
            // no-scroll
            jQuery('body').addClass("modal-open-noscroll");
        }
        else {
            jQuery('body').removeClass("modal-open-noscroll");
			
        }
    })
    jQuery('.modal').on('hide.bs.modal', function () {
        jQuery('body').removeClass("modal-open-noscroll");
			
    })
	
	
// .modal-backdrop classes
$(".modal-fullwhite").on('show.bs.modal', function () {
  setTimeout( function() {
    $(".modal-backdrop").addClass("modal-fullwhite-backdrop");
  }, 0);
});

$(".modal-fullwhite").on('hidden.bs.modal', function () {
  $(".modal-backdrop").addClass("modal-fullwhite-backdrop");
});


// Place Holder for IE9
	$('input[type=text], textarea').placeholder();
// Place Holder for IE9


/****************** 4. General Sections END******************/

/*************************************************************
            5. Contact Form Start
**************************************************************/	
	  $('#contact_form').validate(
		{
		rules: {
		name: {
		minlength: 2,
		required: true
		},
		phone: {
		required: true,
		},
		email: {
		required: true,
		email: true
		},
		subject: {
		minlength: 2,
		required: true
		},
		message: {
		minlength: 2,
		required: true
		}
		},
		highlight: function(element) {
		$(element).closest('.control-group').removeClass('success').addClass('error');
		},
		success: function(element) {
		element
		.text('OK!').addClass('valid')
		.closest('.control-group').removeClass('error').addClass('success');
		},
		submitHandler: function(form) {
						// do other stuff for a valid form
						$.post('contact-general-form.php', $("#contact_form").serialize(), function(data) { // action file is here 
							$('#contact_form').html(data);
						});
					}
		});


/****************** 5. Contact Form END******************/



/*************************************************************
		  	 7. Portfolio on mouseover opactiy
*************************************************************/

		jQuery("area[data-rel^='prettyPhoto']").prettyPhoto();
		jQuery(".portfolio-grid:first a[data-rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'pp_default',slideshow:3000, autoplay_slideshow: false,deeplinking:false});
		jQuery(".portfolio-grid:gt(0) a[data-rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',slideshow:3000, deeplinking:false});
		jQuery("#custom_content a[data-rel^='prettyPhoto']:first").prettyPhoto({
		custom_markup: '<div id="map_canvas" style="width:260px; height:265px"></div>',
		changepicturecallback: function(){ initialize(); }
		});
		jQuery("#custom_content a[data-rel^='prettyPhoto']:last").prettyPhoto({
		custom_markup: '<div id="bsap_1259344" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div><div id="bsap_1237859" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6" style="height:260px"></div><div id="bsap_1251710" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div>',
		changepicturecallback: function(){ _bsap.exec(); }
		});

//prettyPhoto END


 //mixitup Portfolio filters
	  // Portfolio Filter
	  $('#filter-01').mixItUp({

		 selectors: {
		   filter: '.filter-01',
		   effects: ['fade','scale'],
			easing: 'snap'
		 }
	  });
	  
	  // Project Modal
	  $('#filter-02').mixItUp({
		 selectors: {
		   filter: '.filter-02',
		   effects: ['fade','scale'],
			easing: 'snap'
		 }
	  });
		
//mixitup Portfolio END



//mixitup Portfolio END


/****************** 7. Portfolio on mouseover opactiy END******************/


/*************************************************************
                  8. My Skills Section 
//************************************************************/

//Our Skills Bar
	if(jQuery('.our-skills').length != 0){
		var skillbar_active = false;
		jQuery('.progress-bar').hide();
				
		if(jQuery(window).scrollTop() == 0 && isScrolledIntoView(jQuery('.our-skills')) == true){
			skillbarActive();
			skillbar_active = true;
		}
				else if(isScrolledIntoView(jQuery('.our-skills')) == true){
					skillbarActive();
					skillbar_active = true;
				}
		jQuery(window).bind('scroll', function(){
			if(skillbar_active === false && isScrolledIntoView(jQuery('.our-skills')) == true ){
				skillbarActive();
				skillbar_active = true;
			}
		});
	}

//Animated Progress Bars
	$('.progress_bars li').each(function () {
		$(this).appear(function() {
		  $(this).animate({opacity:1,left:"0px"},1200);
		  var b = $(this).find("span").attr("data-width");
		  $(this).find("span").animate({
			width: b + "%"
		  }, 1700, "easeOutCirc");
		});	
	});
//Animated Progress Bars end

/* Piechart Bar */
	$(function() {
			$('.chart').easyPieChart({
				easing: 'easeOutBounce',
				onStep: function(from, to, percent) {
					$(this.el).find('.percent').text(Math.round(percent));
				}
			});
			var chart = window.chart = $('.chart').data('easyPieChart');
			$('.js_update').on('click', function() {
				chart.update(Math.random()*200-100);
			});
		});
/* Piechart Bar */

/****************** 8. My Skills Section END******************/


/*   Spmenu video Stop On Click Close Button  */
$('.modal').on('hide.bs.modal', function(e) {    
    var $if = $(e.delegateTarget).find('iframe');
    var src = $if.attr("src");
    $if.attr("src", '/empty.html');
    $if.attr("src", src);
});
/*   Spmenu video Stop On Click Close Button  */


}); 
// On Document Ready initialise the options 

/*************************************************************
		    8. Custom  Animation  Section
*************************************************************/


// this is used to add Class and webkit animation 
	function Animation(element,effect) 
	{
	$(element).removeClass().addClass(effect + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	$(this).removeClass();
	});
	};

// home page animation functions
	function homepageAnimation()
	{
	$('#main-menu').show('fade', { easing: 'easeInQuad' }, 600); //on homepage Main menu  sliding up animation 
	Animation("#main-menu","fadeInUp","1000"); //on homepage Main menu sliding up animation 
	homeAnimation(); // Home Animation starts here.
	}


// sub page animation functions
	function subpageTopHeaderAnimation ()
	{
	Animation("#sub-menu","fadeInDown","200");
	$('#sub-menu').show('fade', { direction: 'top', easing: 'easeInQuad' }, 300); //on sub page topbar sliding down animation 
	}




function homeAnimation()
	{
		
	$('#main-menu .navbar').transition({
		 opacity:1,y:0,delay:1400
		},900,"snap");
		
		
		$(".accura-social-icons #1").transition({
		x:-20,opacity:0,delay:0
		},200,"snap").transition({x:0, opacity:1},600,"ease",function(){

		});
		
		$(".accura-social-icons #2").transition({
		x:-20,opacity:0,delay:200
		},200,"snap").transition({x:0, opacity:1},600,"ease",function(){

		});
		
		$(".accura-social-icons #3").transition({
		x:-20,opacity:0,delay:400
		},200,"snap").transition({x:0, opacity:1},600,"ease",function(){

		});
		
		$(".accura-social-icons #4").transition({
		x:-20,opacity:0,delay:600
		},200,"snap").transition({x:0, opacity:1},600,"ease",function(){

		});
		
		$(".accura-social-icons #5").transition({
		x:-20,opacity:0,delay:800
		},200,"snap").transition({x:0, opacity:1},600,"ease",function(){

		});
		
		$(".home_address").transition({
		x:-20,opacity:0,delay:1100
		},200,"snap").transition({x:0, opacity:1},600,"ease",function(){

		});
		
		$(".call").transition({
		x:-20,opacity:0,delay:1300
		},200,"snap").transition({x:0, opacity:1},600,"ease",function(){

		});
		
		$(".typer").transition({
		x:-20,opacity:0,delay:1500
		},200,"snap").transition({x:0, opacity:1},600,"ease",function(){

		});
		
		$(".vegas-fullwidth").transition({
		x:0,opacity:0,delay:1500
		},200,"snap").transition({x:0, opacity:1},600,"ease",function(){

		});
		
		$(".content-block .slider").transition({
		x:0,opacity:0,delay:1500
		},200,"snap").transition({x:0, opacity:1},600,"ease",function(){

		});
		
		$(".circlebg").transition({
		x:-20,opacity:0,delay:1500
		},200,"snap").transition({x:0, opacity:1},600,"ease",function(){

		});
		
		$(".flexslider-animate").transition({
		x:-20,opacity:0,delay:1500
		},200,"snap").transition({x:0, opacity:1},600,"ease",function(){

		});
		
		$(".hexagon-slider").transition({
		x:-20,opacity:0,delay:1500
		},200,"snap").transition({x:0, opacity:1},600,"ease",function(){

		});
		
		$(".home_title").transition({
		x:-20,opacity:0,delay:1400
		},200,"snap").transition({x:0, opacity:1},600,"ease",function(){

		});
		
		$(".home_title_sup").transition({
		x:20,opacity:0,delay:1300
		},200,"snap").transition({x:0, opacity:1},600,"ease",function(){

		});
		
		$(".home_arrow").transition({
		x:0,opacity:0,delay:1000
		},200,"snap").transition({x:0, opacity:1},600,"ease",function(){

		});
		
		
		$(".spmenu-tags1 .spmenu").transition({
		x:70,opacity:0,delay:2000
		},200,"snap").transition({x:0, opacity:1},600,"ease",function(){

		});
		
		$(".spmenu-tags2 .spmenu").transition({
		x:70,opacity:0,delay:2200
		},200,"snap").transition({x:0, opacity:1},600,"ease",function(){

		});
		
		$(".spmenu-tags3 .spmenu").transition({
		x:70,opacity:0,delay:2400
		},200,"snap").transition({x:0, opacity:1},600,"ease",function(){

		});
		
		$(".spmenu-tags4").transition({
		x:70,opacity:0,delay:2600
		},200,"snap").transition({x:0, opacity:1},600,"ease",function(){

		});
		}
	
	function homeAnimationResetting()
	{
	$("#main-menu .navbar, .accura-social-icons #1, .accura-social-icons #2, .accura-social-icons #3, .accura-social-icons #4, .accura-social-icons #5,.home_address, .call, .typer, .vegas-fullwidth, .content-block .slider, .circlebg, .flexslider-animate, .hexagon-slider, .home_title, .home_title_sub, .home_arrow, .spmenu-tags1 .spmenu1, .spmenu-tags2 .spmenu, .spmenu-tags3 .spmenu, .spmenu-tags4 .spmenu").css("transform","");
	$("#main-menu .navbar, .accura-social-icons #1, .accura-social-icons #2, .accura-social-icons #3, .accura-social-icons #4, .accura-social-icons #5,.home_address, .call, .typer, .vegas-fullwidth, .content-block .slider, .circlebg, .flexslider-animate, .hexagon-slider, .home_title, .home_title_sub, .home_arrow, .spmenu-tags1 .spmenu1, .spmenu-tags2 .spmenu, .spmenu-tags3 .spmenu, .spmenu-tags4 .spmenu").css("opacity","0");
	$("#main-menu .navbar, .accura-social-icons #1, .accura-social-icons #2, .accura-social-icons #3, .accura-social-icons #4, .accura-social-icons #5,.home_address, .call, .typer, .vegas-fullwidth, .content-block .slider, .circlebg, .flexslider-animate, .hexagon-slider, .home_title, .home_title_sub, .home_arrow, .spmenu-tags1 .spmenu1, .spmenu-tags2 .spmenu, .spmenu-tags3 .spmenu, .spmenu-tags4 .spmenu").css("transition","");
	}
	


/******************  9. Custom  Functions Section END******************/
