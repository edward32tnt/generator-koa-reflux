/**
 * Main application routes
 */

'use strict';

var mount = require('koa-mount');
var serve  = require('koa-static');

module.exports = function(app) {

	// YEOMAN INJECT ROUTES BELOW
	app.use(mount('/api', require('../resources/root')));
	app.use(mount('/', serve('./public')));
	app.use(mount('/public', serve('./public')));
	app.use(mount('/dist', serve('./dist')));
};
