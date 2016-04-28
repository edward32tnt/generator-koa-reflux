'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var util = require('util');
var fs = require('fs');

describe('generator-koa-reflux:resource', function () {
  var appname = 'testme'
  var resourcename = 'testresource'

  before(function (done) {
    helpers
      .run(path.join(__dirname, '../generators/resource'))
      .withOptions({skiproutes:true})
      .withArguments([resourcename])
      .withPrompts({reviewed: 'y'})
      .on('end', done);
  });

  it('creates files', function() {
    assert.file([
      util.format('server/resources/%s/index.js', resourcename),
      util.format('server/resources/%s/%s.controller.js', resourcename, resourcename),
      util.format('server/resources/%s/%s.spec.js', resourcename, resourcename),
    ])
  });
  //
  // it('routers add', function() {
  //   assert.fileContent('server/config/routers.js',
  //     util.format("app.use(mount('/api/%s', require('../resources/%s')));", resourcename, resourcename));
  // });
  //
});
