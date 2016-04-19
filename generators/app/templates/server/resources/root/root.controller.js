'use strict';


// Get list of roots
exports.index = function*(next) {
	this.status = 403;
  this.body = { 
  	name : 'reactes6', 
  	info : 'API Docs URL'
  };
};