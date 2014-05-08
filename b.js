'use strict';

var api = {};

console.log( 'b.js' );

api.init = function() {

    console.log( 'b.js init...' );

    require('./c').init();

};

module.exports = api;