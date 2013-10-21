module.exports = {
	options: {
		nospawn : true,
		livereload: true
	},
	assemble: {
		files: ['src/templates/**/**'],
		tasks: ['assemble'],
	},
	css: {
		files: ['src/assets/styl/**/**'],
		tasks: ['stylus'],
	},
	js: {
		files: ['src/assets/js/**/**'],
		tasks: ['concat:files', 'uglify'],
	},
	img: {
		files: ['src/assets/img/**/**'],
		tasks: ['copy:img'],
	},
}