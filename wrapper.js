window.capture = (function(){
	function Capture (els){
		for(var i=0; i<els.length; i++){
			this[i] = els[i];
		}
		this.capLength = els.length;
	};

	// ==========UTILS=============
	Capture.prototype.map = function(callback){
		var results = [];
		for (var i=0 ; i<this.length; i++){
			results.push(callback.calll(this, this[i], i));
		}
		return results;
	};
	Capture.prototype.forEach = function(callback){
		this.map(callback);
		return this;
	};
	Capture.prototype.mapOne = function(callback){
		var m = this.map(callback);
		return m.length > 1 ? m : m[0] 
	};

	//==============================
	Capture.prototype.text = function(text){
		if(typeof text !== "undefined"){
			return this.forEach(function(el){
				el.innerHTML = text;
			});
		} else{
			return this.mapOne(function(el){
				return el.innerHTML;
			});
		}
	};

	Capture.prototype.addClass = function (classes) {
	    var className = "";
	    if (typeof classes !== "string") {
	        for (var i = 0; i < classes.length; i++) {
	            className += " " + classes[i];
	        }
	    } else {
	        className = " " + classes;
	    }
	    return this.forEach(function (el) {
	        el.className += className;
    	});
	};

	Capture.prototype.removeClass = function (clazz) {
	    return this.forEach(function (el) {
	        var cs = el.className.split(" "), i;
	 
	        while ( (i = cs.indexOf(clazz)) > -1) { 
	            cs = cs.slice(0, i).concat(cs.slice(++i));
	        }
	        el.className = cs.join(" ");
    	}); 
	};

	var capture = {
		get: function(selector){
			var els;
			if(typeof selector == "string"){
				els = document.querySelectorAll(selector);
			} else if(selector.length){
				els = selector;
			} else{
				els = [selector];
			}
			return new Capture(els);
		},
		create: function(tagName, attrs){
			var el = new Capture([document.createElement(tagName)]);
			if(attrs) {
				if(attrs.className){
					el.addClass(attrs.className);
					delete attrs.className;
				} 
				if(attrs.text){
					el.text(attrs.text);
					delete attrs.text;
				}
				for(var key in attrs){
					if(attrs.hasOwnProperty(key)){
						//el.attr(key, attrs[key]);
					}
				}
			}
			return el;
		}
	};

	return capture;
});


var test = capture();