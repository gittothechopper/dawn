'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		site: grunt.file.readYAML('src/data/site.yml'),

		assemble: {
		// Task-level options
		options: {
			prettify: {
				indent: 4
			},
			marked: {sanitize: false},
			production: true,
			data: 'src/**/*.{json,yml}',
			assets: '<%= site.destination %>/assets',
			helpers: 'src/helpers/helper-*.js',
			layoutdir: 'src/templates/layouts',
			partials: ['src/templates/includes/**/*.html'],
		},

		site: {
			// Target-level options
			options: {
				layout: 'default.html'
			},
			files: [{ 
				expand: true, 
				cwd: 'src/templates/pages', 
				src: ['*.html'], 
				dest: '<%= site.destination %>/' }
			]}
		},
		
		// Before generating any new files,
		// remove any previously-created files.
		clean: {
			all: ['<%= site.destination %>/**/*.{html,md}']
		},
		watch: {
			scripts: {
				files: ['src/templates/**/*.*'],
				tasks: ['assemble'],
				options: {
					spawn: false,
				},
			},
		},
	});

	// Load npm plugins to provide necessary tasks.
	grunt.loadNpmTasks('assemble');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task to be run.
	grunt.registerTask('default', ['clean', 'assemble']);
};