module.exports = function (grunt) {
	grunt.registerTask('irep', ['string-replace'], function () {

		var fs = require('fs.extra');

		// get list of html files
		grunt.file.expand({
			filter: 'isFile',
			cwd: 'dist'
		}, ['*.html']).forEach(function (file) {	
			var filename = file.substr(0, file.lastIndexOf('.')) || file;
			createFolders(filename)
		});

		// create folders for irep files
		function createFolders (filename) {
			var tempPath = '.tmp/assets/'+filename+'/',
				tempDirectories = [
					tempPath,
					tempPath+'css/',
					tempPath+'img/',
					tempPath+'js/'
				]

			tempDirectories.forEach(function (tempDirectory) {
				grunt.file.mkdir(tempDirectory);
			});
		
			copyAssets(filename);
		}

	});
}