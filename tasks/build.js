module.exports = function (grunt) {
	grunt.registerTask('build', ['default', 'imagemin', 'cssmin', 'htmlmin']);
}