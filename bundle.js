(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// a.js

var b = require('./b');

// var c = require('./c');

var api = {};

// c.init();

console.log('a.js');

api.init = function() {

    console.log( 'a.js init...' );

    b.init();

};

api.identify = function() {

    console.log( 'i am a.js' );

};

module.exports = api;
},{"./b":2}],2:[function(require,module,exports){
'use strict';

// b.js

var b = require('./a').init();

var api = {};

console.log( 'b.js' );

api.init = function() {

    console.log( 'b.js init...' );

    require('./c').init();

};

module.exports = api;
},{"./a":1,"./c":3}],3:[function(require,module,exports){
'use strict';

// c.js

var api = {};

console.log( 'c.js' );

api.init = function() {

    console.log( 'c.js init...' );

};

module.exports = api;
},{}],4:[function(require,module,exports){
'use strict';

// index.js

var a = require('./a');

console.log('index.js');

a.init();
},{"./a":1}]},{},[4])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEVEVUxMXFxBcHBEYXRhXFxSb2FtaW5nXFxucG1cXG5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiQzovVXNlcnMvRURVTEwvRGVza3RvcC9HaXRIdWIvYnJvd3NlcmlmeS10ZXN0L2EuanMiLCJDOi9Vc2Vycy9FRFVMTC9EZXNrdG9wL0dpdEh1Yi9icm93c2VyaWZ5LXRlc3QvYi5qcyIsIkM6L1VzZXJzL0VEVUxML0Rlc2t0b3AvR2l0SHViL2Jyb3dzZXJpZnktdGVzdC9jLmpzIiwiQzovVXNlcnMvRURVTEwvRGVza3RvcC9HaXRIdWIvYnJvd3NlcmlmeS10ZXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8vIGEuanNcclxuXHJcbnZhciBiID0gcmVxdWlyZSgnLi9iJyk7XHJcblxyXG4vLyB2YXIgYyA9IHJlcXVpcmUoJy4vYycpO1xyXG5cclxudmFyIGFwaSA9IHt9O1xyXG5cclxuLy8gYy5pbml0KCk7XHJcblxyXG5jb25zb2xlLmxvZygnYS5qcycpO1xyXG5cclxuYXBpLmluaXQgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyggJ2EuanMgaW5pdC4uLicgKTtcclxuXHJcbiAgICBiLmluaXQoKTtcclxuXHJcbn07XHJcblxyXG5hcGkuaWRlbnRpZnkgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyggJ2kgYW0gYS5qcycgKTtcclxuXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGFwaTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vLyBiLmpzXHJcblxyXG52YXIgYiA9IHJlcXVpcmUoJy4vYScpLmluaXQoKTtcclxuXHJcbnZhciBhcGkgPSB7fTtcclxuXHJcbmNvbnNvbGUubG9nKCAnYi5qcycgKTtcclxuXHJcbmFwaS5pbml0ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coICdiLmpzIGluaXQuLi4nICk7XHJcblxyXG4gICAgcmVxdWlyZSgnLi9jJykuaW5pdCgpO1xyXG5cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYXBpOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8vIGMuanNcclxuXHJcbnZhciBhcGkgPSB7fTtcclxuXHJcbmNvbnNvbGUubG9nKCAnYy5qcycgKTtcclxuXHJcbmFwaS5pbml0ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coICdjLmpzIGluaXQuLi4nICk7XHJcblxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBhcGk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy8gaW5kZXguanNcclxuXHJcbnZhciBhID0gcmVxdWlyZSgnLi9hJyk7XHJcblxyXG5jb25zb2xlLmxvZygnaW5kZXguanMnKTtcclxuXHJcbmEuaW5pdCgpOyJdfQ==
