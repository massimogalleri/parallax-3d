module.exports = function(grunt){

  grunt.initConfig({

      // create development version js
      concat: {
        main: {
          options: {
            banner: "\n",
            process: function(src, filepath) {
              return '\n\n// Source: ' + filepath + '\n\n' + src ;
            },
          },
          src: [
            'node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
            'node_modules/imagesloaded/imagesloaded.pkgd.min.js'
          ],
          dest: 'vendors.js',
          nonull: true
        },
      },



  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['concat']);

};