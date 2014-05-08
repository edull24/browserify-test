(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var b = require('./b');

var c = require('./c');

var api = {};

c.init();

console.log('a.js');

api.init = function() {

    console.log( 'a.js init...' );

    b.init();

};

api.identify = function() {

    console.log( 'i am a.js' );

};

module.exports = api;
},{"./b":2,"./c":3}],2:[function(require,module,exports){
'use strict';

var api = {};

console.log( 'b.js' );

api.init = function() {

    console.log( 'b.js init...' );

    require('./c').init();

};

module.exports = api;
},{"./c":3}],3:[function(require,module,exports){
'use strict';

var api = {};

console.log( 'c.js' );

api.init = function() {

    console.log( 'c.js init...' );

};

module.exports = api;
},{}],4:[function(require,module,exports){
'use strict';

var a = require('./a');

console.log('index.js');

a.init();
},{"./a":1}]},{},[4])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEVEVUxMXFxBcHBEYXRhXFxSb2FtaW5nXFxucG1cXG5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiQzovVXNlcnMvRURVTEwvRGVza3RvcC9icm93c2VyaWZ5LXRlc3QvYS5qcyIsIkM6L1VzZXJzL0VEVUxML0Rlc2t0b3AvYnJvd3NlcmlmeS10ZXN0L2IuanMiLCJDOi9Vc2Vycy9FRFVMTC9EZXNrdG9wL2Jyb3dzZXJpZnktdGVzdC9jLmpzIiwiQzovVXNlcnMvRURVTEwvRGVza3RvcC9icm93c2VyaWZ5LXRlc3QvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGIgPSByZXF1aXJlKCcuL2InKTtcclxuXHJcbnZhciBjID0gcmVxdWlyZSgnLi9jJyk7XHJcblxyXG52YXIgYXBpID0ge307XHJcblxyXG5jLmluaXQoKTtcclxuXHJcbmNvbnNvbGUubG9nKCdhLmpzJyk7XHJcblxyXG5hcGkuaW5pdCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCAnYS5qcyBpbml0Li4uJyApO1xyXG5cclxuICAgIGIuaW5pdCgpO1xyXG5cclxufTtcclxuXHJcbmFwaS5pZGVudGlmeSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCAnaSBhbSBhLmpzJyApO1xyXG5cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYXBpOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBhcGkgPSB7fTtcclxuXHJcbmNvbnNvbGUubG9nKCAnYi5qcycgKTtcclxuXHJcbmFwaS5pbml0ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coICdiLmpzIGluaXQuLi4nICk7XHJcblxyXG4gICAgcmVxdWlyZSgnLi9jJykuaW5pdCgpO1xyXG5cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYXBpOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBhcGkgPSB7fTtcclxuXHJcbmNvbnNvbGUubG9nKCAnYy5qcycgKTtcclxuXHJcbmFwaS5pbml0ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coICdjLmpzIGluaXQuLi4nICk7XHJcblxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBhcGk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGEgPSByZXF1aXJlKCcuL2EnKTtcclxuXHJcbmNvbnNvbGUubG9nKCdpbmRleC5qcycpO1xyXG5cclxuYS5pbml0KCk7Il19
