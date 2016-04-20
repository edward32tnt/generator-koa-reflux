/**
 * Koa config
 */

'use strict';

var config = require('./environment');
var logger = require('koa-logger');

module.exports = function(app) {

   // Logger
   app.use(logger());

};
