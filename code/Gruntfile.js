const webpackConfig = require('./webpack.config');

module.exports = function(grunt) {
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      styles: {
        files: ['dev/less/*.less'],
        tasks: ['less:dev']
      },
      script: {
        files: ['dev/js/*.js'],
        tasks: ['webpack:dev']
      }
    },

    less: {
      dev: {
        files: {
          'public/css/main.css': ['dev/less/main.less']
        }
      }
    },

    webpack: {
      dev: webpackConfig
    }
  });

  // Tasks
  grunt.registerTask('default', ['develop']);
  grunt.registerTask('develop', [
    'less:dev',
    'webpack:dev',
    'watch'
    ]);
};