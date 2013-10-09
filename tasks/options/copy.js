module.exports = {
	img: {
		files: [{
			expand: true,
			cwd: 'src/assets',
			src: ['img/**', 'fonts/**'],
			dest: 'app/assets',
		},
	]},
	js: {
		files: [{
			expand: true,
			cwd: 'src/assets',
			src: 'js/scripts/**',
			dest: 'app/assets',
		},
	]},
}