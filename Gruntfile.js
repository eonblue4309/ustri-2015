module.exports = function(grunt) {
  grunt.initConfig({
    'http-server': {
      dev: {
        root: 'public',
        port: 8383,
        host: '127.0.0.1',
        showDir : true,
        autoIndex: true,
        ext: "html",
        runInBackground: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-http-server');

  grunt.registerTask('default', ['http-server']);
};