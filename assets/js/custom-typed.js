
// On Document Ready initialise the options 
jQuery(document).ready(function($){
"use strict";

// ******************************************************************************************
// Configuration Start		
// ******************************************************************************************

//*********************Google MAP *********************/
		
		var color = "#e74135" // google map background colour
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



/**	 Piechart
 *****************************************************/

$(function() {
    $('.chart').easyPieChart({
        barColor: '#eb4f43',
		trackColor:"#d5d5d5",
		lineWidth:8
    });
});


/**	 Typewriter
 *****************************************************/
    $(function(){

        $("#typed").typed({
            strings: ["A <span>multi-disciplinary</span> designer", "More than <span>13 Year's</span> Experience."],
            typeSpeed: 80,
            backDelay: 500,
            loop: true,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
            callback: function(){ foo(); },
            resetCallback: function() { newTyped(); }
        });

        $(".reset").click(function(){
            $("#typed").typed('reset');
        });

    });

    function newTyped(){ /* A new typed object */ }

    function foo(){ console.log("Callback"); }
			
});
			
// On Document Ready initialise the options 
