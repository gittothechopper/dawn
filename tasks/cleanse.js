module.exports = function (grunt) {

	/* 
		Create template pages and their associated assets 
		Run from the command line as follows: grunt create --name=$var
	*/
	
	var shell = require('shelljs'),
		name = grunt.option('name') || null;

	grunt.registerTask('create', function() {
		
		var assetsDirectory = 'src/assets/',
			pagesDirectory = 'src/templates/pages/',
			cssDirectory = 'src/assets/styl/',
			imagesDirectory = 'src/assets/img/',
			javascriptDirectory = 'src/assets/js/scripts/',
			modulePattern = 'var '+name+' = (function () {\n\tfunction init () {\n\t}\n\treturn {\n\t\tinit: init\n\t}\n}());\n\n$(function () {\n\t'+name+'.init();\n});',
			templateContent = '---\ntitle: '+name+'\n---';

		shell.exec('mkdir '+imagesDirectory+name);
		shell.exec('touch '+javascriptDirectory+name+'.js');

		// create css
		grunt.file.write(cssDirectory+name+'.styl', '.'+name+'\n\t/* '+name+' */')
		
		// import styles into main stylsheet
		var screenStyl = grunt.file.read(cssDirectory+'screen.styl');
		grunt.file.write(cssDirectory+'screen.styl', screenStyl+'\n@import "'+name+'.styl"')

		// create js module
		grunt.file.write(javascriptDirectory+name+'.js', modulePattern)

		// create page template
		grunt.file.write(pagesDirectory+name+'.hbs', templateContent);

	});
};