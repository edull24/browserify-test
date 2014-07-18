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