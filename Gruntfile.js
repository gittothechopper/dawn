'use strict';

module.exports = function(grunt) {

	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		site: grunt.file.readYAML('src/data/site.yml'),

		assemble: {
			options: {
				production: false,
				data: './src/**/*.{json,yml}',
				assets: '<%= site.destination %>/assets',
				helpers: './src/helpers/helper-*.js',
				layoutdir: './src/templates/layouts',
				partials: ['./src/templates/includes/**/*.html'],
			},
			site: {
				options: {
					layout: 'default.html'
				},
				files: [{ 
					expand: true, 
					cwd: 'src/templates/pages', 
					src: ['*.html'], 
					dest: '<%= site.destination %>/' 
				},
			]},
		},
		
		// clean
		clean: {
			all: ['<%= site.destination %>/**/*.{html,md}']
		},

		// validation
		validation: {
			options: {
				reset: true
			},
			all: {
				src: ['./app/**/*.*']
			},
		},

		//
		prettify: {
			options: {
				condense: true,
				indent: 4,
				indent_char: '	',
				indent_inner_html: true,
			},
			all: {
				expand: true,
				cwd: './app',
				ext: '.html',
				src: ['*.html'],
				dest: './app'
			},
		},

		// watch
		watch: {
			scripts: {
				files: ['src/templates/**/**'],
				tasks: ['assemble'],
				options: {
					spawn: false,
					livereload: true
				},
			},
		},
	});

	// Load npm plugins to provide necessary tasks.
	grunt.loadNpmTasks('assemble');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-html-validation');
	// not in use
	grunt.loadNpmTasks('grunt-prettify');	

	// Default task to be run.
	grunt.registerTask('default', ['clean', 'assemble']);
	grunt.registerTask('validate', ['validation:all']);

};