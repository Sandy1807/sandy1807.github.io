

// On Document Ready initialise the options 
jQuery(document).ready(function($){
"use strict";


// ******************************************************************************************
// Configuration Start		
// ******************************************************************************************

//*********************Google MAP *********************/
		
		var color = "#f6aa00" // google map background colour
		var saturation = 100 // 
		var mapLatitude=40.710892 
		var mapLongitude=-74.009920//(First Value Latitude, Second Value ), get YOUR coordenates here!: http://itouchmap.com/latlong.html
		var mapZoom_value=16 // Map zoom level parameter only numeric  


// Google map marker example 2 locations 
		//map-marker #1
		var marker1_Latitude=40.707892 
		var marker1_Longitude=-74.008920
		var marker1_content="<h2>The Spice Lounge</h2> Bridge Water, NJ" // marker or  on click content (Info Window) 
		var marker1_pointerUrl = 'assets/img/map-marker.png' // set your color pointer here!

		//map-marker #2
		var marker2_Latitude=40.710892
		var marker2_Longitude=-74.012920
		var marker2_content="<h2>The Spice Lounge</h2>San Diego California" // marker or  on click content (Info Window) 
		var marker2_pointerUrl = 'assets/img/map-marker.png' // set your color pointer here!

//********************* Google MAP END *********************/



/**	 Vegas Slider
 *****************************************************/

$(document).ready(function(){
"use strict";	
/* custom function VEGAS Home Slider */
	function loadVegas(){
		$.vegas('slideshow', {
			  backgrounds:[
				{ src:'http://placehold.it/1900x950' },
				{ src:'http://placehold.it/1900x950' },
				{ src:'http://placehold.it/1900x950' },
			  ]
			})('overlay', {
			  /*src:'assets/img/pat8.png'*/
			});
			
			$( "#vegas-next" ).click(function() {
			  $.vegas('next');
			});
			$( "#vegas-prev" ).click(function() {
			  $.vegas('previous');
		});
	}
	
	loadVegas();
});

/**	 Vegas Slider
 *****************************************************/




/**	 CYCLE
 *****************************************************/
$(document).ready( function(){
	
	$('.slider').cycle({
		fx : 'scrollVert',
		timeout: 7000,
		delay: 1000,
		speed: 500,
		slides: '.slide'
	});
	
});



/**	 Piechart
 *****************************************************/
 
$(function() {
    $('.chart').easyPieChart({
        barColor: '#f6aa00',
		trackColor:"#d5d5d5",
		lineWidth:8
    });
});
			
});
			
// On Document Ready initialise the options 
