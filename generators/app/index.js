'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the posh ' + chalk.red('generator-koa-reflux') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'appName',
      message: 'Your Appname?',
      default: this.appname
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someAnswer;

      done();
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('package.json'),
      this.destinationPath('package.json')
    );

    this.fs.copy(
      this.templatePath('gulpfile.js'),
      this.destinationPath('gulpfile.js')
    );

    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore')
    );

    this.fs.copy(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );

    this.fs.copy(
      this.templatePath('server'),
      this.destinationPath('server')
    );

    this.fs.copy(
      this.templatePath('client'),
      this.destinationPath('client')
    )

    this.fs.copy(
      this.templatePath('public'),
      this.destinationPath('public')
    )
  },

  install: function () {
    this.installDependencies();
  }
});
