module.exports = function(grunt) {

  var jsPath = 'public/javascripts';

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'public/javascripts/*.js','public/javascripts/collections/*.js','public/javascripts/models/*.js', 'public/javascripts/pages*.js', 'tests/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['public/stylesheets/**/*.less','public/templates/**/*.handlebars','public/javascripts/**/*.js'],
      tasks: ['less','handlebars','uglify']
    },
    handlebars: {
      all: {
        files: {
          'public/templates/compiled/create.js': 'public/templates/create.handlebars',
          'public/templates/compiled/view.js': 'public/templates/view.handlebars',
          'public/templates/compiled/edit.js': 'public/templates/edit.handlebars'
        },
        options: {
          namespace: 'App.hb.templates',
          exportAMD: true,
          returnAMD: true,
          pathToHandlebars: 'hb',
          knownHelpers: ['if', 'each']
        }
      },
      some: {
        files: {
          'public/templates/compiled/partials/addBundle.js': [
            'public/templates/partials/addBundle.handlebars'
          ]
        },
        options: {
          namespace: 'App.hb.partials',
          exportAMD: true,
          returnAMD: true,
          pathToHandlebars: 'hb',
          knownHelpers: ['if', 'each']
        }
      }
      },
      uglify: {
        dist: {
          files: {
            'public/javascripts/core.min.js': [
              jsPath+'/lib/require.min.js',
              jsPath+'/lib/jquery-1.12.0.js',
              jsPath+'/lib/pubSub.js',
              jsPath+'/requireConfig.js',
              jsPath+'/entry.js',
              jsPath+'/modules/module.js',
              jsPath+'/subModules/subModule.js'
            ]
          }
        }
      },
      less: {
        production: {
          files: {
            "public/stylesheets/style.css": ["public/stylesheets/style.less","public/stylesheets/lib/*.css"]
          }
        }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-handlebars-compiler');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['handlebars','less','uglify']);

};