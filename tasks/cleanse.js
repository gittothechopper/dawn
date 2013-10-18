module.exports = function (grunt) {

	var assets = new Array();

	// get list of assets
	grunt.registerTask('cleanse', function () {
		grunt.file.expand({
			filter: 'isFile',
			cwd: 'app'
		}, ['**/*']).forEach(function (file) {	
			assets.push(file);
		});
		output(assets);
	});

	// find links to assets in content
	function output (assets) {
		grunt.file.expand({
			filter: 'isFile',
			cwd: 'app'
		}, ['**/*.html', '**/*.js', '**/*.css']).forEach(function (file) {	
			var content = grunt.file.read('app/'+file);


		});
	}

}