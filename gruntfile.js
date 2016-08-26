'use strict';

module.exports = function(grunt){
  grunt.initConfig({

    watch: {
      sass: {
        files: ['./css/sass/style.scss'],
        tasks: ['sass:dev'],
        options: {
          spawn: false,
          livereload: true
        }
      },
      js: {
        files: ['./js/src/app.js'],
        tasks: ['babel'],
        options: {
          spawn: false,
          livereload: true
        }
      }
    },

    sass: {
      dev: {
        options: {
          outputStyle: 'nested',
          sourceMap: true
        },
        files: {
          './css/style.css': './css/sass/style.scss'
        }
      }
    },
    
    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015'],
      },
      dist: {
        files: {
          './js/dist/app.js': './js/src/app.js'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-babel');

  grunt.registerTask('default', ['watch']);
};

