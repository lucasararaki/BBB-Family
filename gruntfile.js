module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 8000,
          hostname: 'localhost',
          livereload: true
        }
      }
    },
    sass: {
      dist: {
        files: {
          'css/style.css': 'sass/style.scss'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: 'sass/*.scss',
        tasks: ['sass']
      },
      html: {
        files: 'index.html'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['connect', 'watch']);
}
