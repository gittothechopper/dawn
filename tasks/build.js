module.exports = function (grunt) {
	grunt.registerTask('build', ['default', 'cssmin', 'htmlmin', 'uglify', 'cleanse', 'imagemin']);
}