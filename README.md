#Capture.js
##Faster way to capture front end **CLICK** event 
##and send it to your server (next release)


###Dependencies
* jQuery
* platform.js
 
###Let's begin
* Include capture.js in your html
```html
<script type="text/javascript" src="capture.js"></script>
```

* Mark the tag you want to capture with attribute 'capture'
```html
<p capture>This textline can be captured.</p>
```

* Create new capture object
```javascript
var pan = window.capture();
```
Here we go.


###How to use
*pan.browserInfo(): user's browser information
```javascript
pan.browserInfo();
```

*pan.list(): list out all the tags that can be captured
```javascript
pan.list();
```

*pan.createEvent(): create captured event.
```javascript
pan.createEvent();
```

