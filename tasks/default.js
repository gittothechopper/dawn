module.exports = function (grunt) {
	grunt.registerTask('default', ['assemble', 'stylus', 'concat:files', 'copy:img', 'uglify', 'prettify:all']);
}