// Capture.js is the modern web data collection framework for single page application

window.capture = (function(){

	// Constructor??
	function Capture(){
		var info = platform.parse(navigator.userAgent);
		this.browserInfo = {
			name: 			platform.name,
			version: 		platform.version,
			os: 			platform.os,
			layout: 		platform.layout,
			description: 	platform.description,
			cookies: 		navigator.cookieEnabled,
			screenSize: 	window.screen,
		};
	};

	var capture = {
		create: function(){
			return new Capture();
		}
	};

	return capture;
});
