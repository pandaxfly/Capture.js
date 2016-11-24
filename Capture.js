// Capture.js is the modern web data collection framework for single page application

window.capture = (function(){

	// Constructor??
	function Capture(){
	};

	var capture = {
		create: function(){
			return new Capture();
		},
		browserInfo: function(){
			var info = platform.parse(navigator.userAgent);
			var browserInfo = {
				name: 				platform.name,
				version: 			platform.version,
				os: 					platform.os,
				layout: 			platform.layout,
				description: 	platform.description,
				cookies: 			navigator.cookieEnabled,
				screenSize: 	window.screen,
			};
			return browserInfo;
		},
		list: function(){
			var capturedItems = $("[capture]");
			return capturedItems;
		},
		createEvent: function(){
			$("[capture]").on( "click", function() { 
		  	alert( $( this ).text() );
			});
		}
	};

	return capture;
});

var a = window.capture()
