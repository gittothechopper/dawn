module.exports = function(grunt) {
	/* 
		Create template pages and their associated assets 
		Run from the command line as follows: grunt create --name=$var
	*/
	
	var shell = require('shelljs'),
		name = grunt.option('name') || null;

	grunt.registerTask('create', function() {
		
		var assetsDirectory = 'src/assets/',
			templatesDirectory = 'src/templates/';

		shell.exec('mkdir '+assetsDirectory+'/img/'+name);
		shell.exec('touch '+assetsDirectory+'js/scripts/'+name+'.js');
		shell.exec('touch '+assetsDirectory+'/styl/'+name+'.styl');
		shell.exec('touch '+templatesDirectory+'/pages/'+name+'.hbs');
	});
};