module.exports = function(grunt){

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('autoprefixer');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
    	dev: {
    		options: {
		        style: 'expanded',
		        noCache: true,
		        sourcemap: 'none'
		    },
		    files: {
		    	'estilo.css' : 'style.sass'
      		}
    	}    
    },

    postcss: {
        options: {
            map: true,
            processors: [
                require('autoprefixer')
            ]
        },
        dev: {
            src: 'estilo.css'
        }
    },

    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: 'style.sass',	
        tasks: ['sass','postcss']
      }
    }
  });

  grunt.registerTask('default', ['watch']);
}