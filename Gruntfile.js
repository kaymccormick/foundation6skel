module.exports = function(grunt) {
    grunt.initConfig({
	babel:
	{
	    dist: {
		files: {
		    'build/foundation.core.js': 'node_modules/foundation-sites/js/foundation.core.js'
		}
	    }
	},
 	concat: {
	    options: {
		separator: ';',      },
	    dist: {
		src: ['build/foundation.core.js'],
		dest: 'dist/built.js'
	    }
	},
	sass: {
	    dist: {
		options: {
		    loadPath: ['node_modules/foundation-sites/scss']
		},
		files: {
		    'main.css': 'main.scss'
		}
	    }
	},

	pkg: grunt.file.readJSON('package.json'),
	uglify: {
	    options: {
		banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
	    },
	    build: {
		src: 'src/<%= pkg.name %>.js',
		dest: 'build/<%= pkg.name %>.min.js'
	    }
	}
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-babel');

    // Default task(s).
    grunt.registerTask('default', ['sass']);

};
