module.exports = {
	scripts: {
		files: ['src/templates/**/**', 'src/styl/**', 'src/assets/**'],
		tasks: ['assemble', 'stylus','concat:files', 'copy:img', 'copy:js'],
		options: {
			nospawn : true,
			livereload: true
		},
	},
}