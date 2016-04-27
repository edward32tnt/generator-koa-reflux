'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-koa-reflux:app', function () {
  var appname = 'testme'
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({appName: appname})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'client/css/main.less',
      'client/js/Router.js',
      'client/js/actions/HelloActions.js',
      'client/js/components/HelloApp.js',
      'client/js/stores/HelloStores.js',
      'public/favicon.ico',
      'public/index.html',
      'public/js/ReactRouter.min.js',
      'public/js/react-dom.min.js',
      'public/js/react.min.js',
      'public/js/reflux.min.js',
      'server/config/environment/development.js',
      'server/config/environment/index.js',
      'server/config/environment/local.js',
      'server/config/environment/production.js',
      'server/config/environment/test.js',
      'server/config/koa.js',
      'server/config/routes.js',
      'server/resources/root/index.js',
      'server/resources/root/root.controller.js',
      'server/resources/root/root.spec.js',
      'server/server.js',
      'package.json',
      'webpack.config.js',
      'bower.json',
      'gulpfile.js'
    ])
  });

  it('app template file names', function() {
    assert.fileContent('package.json', '"name": "testme"');
    assert.fileContent('bower.json', '"name": "testme"');
    assert.fileContent('server/resources/root/root.controller.js', "name : 'testme'");
  })
});
