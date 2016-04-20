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

    this.prompt([{
      type: 'input',
      name: 'appName',
      message: 'Your Appname?',
      default: this.appname
    }], function(ans) {
      this.appName  = ans.appName;
      done()
    }.bind(this));

  },

  writing: function () {
    this.fs.copy(
      this.templatePath('package.json'),
      this.destinationPath('package.json'), {
        process: function(input) {
          var output = input.toString('utf-8')
                .replace('{{API_NAME}}', this.appName)
          return output
        }.bind(this)
      }
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

    this.fs.copy(
      this.templatePath('server/resources/root/root.controller.js'),
      this.destinationPath('server/resources/root/root.controller.js'), {
        process: function(input) {
          var output = input.toString('utf-8')
                .replace('{{API_NAME}}', this.appName)
                .replace('{{API_INFO}}', this.appName)
          return output
        }.bind(this)
      }
    );

  },

  install: function () {
    this.installDependencies({
      skipInstall: this.option['skip-install'],
    });
  }
});
