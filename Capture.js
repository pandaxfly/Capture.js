// Capture.js is the modern web data collection framework for single page application

window.capture = (function(){

	// capture.js variables
	var capturedEvent;

	var capture = {
		create: function(){
			return new Capture();
		},
		browserInfo: function(){
			var info = platform.parse(navigator.userAgent);
			var browserInfo = {
				name: 				platform.name,
				version: 			platform.version,
				os: 				platform.os,
				layout: 			platform.layout,
				description: 		platform.description,
				cookies: 			navigator.cookieEnabled,
				screenSize: 		window.screen,
			};
			return browserInfo;
		},
		list: function(){
			var capturedItems = $("[capture]");
			return capturedItems;
		},
		createEvent: function(){
			$("[capture]").on( "click", function(event) { 
		  	capturedEvent = event.target.innerText;
		  	alert(capturedEvent);
			});
		}
	};

	return capture;
});

var pan = window.capture();

$(function(){
	pan.createEvent();
});
