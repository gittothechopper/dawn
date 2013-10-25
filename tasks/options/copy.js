module.exports = {
	img: {
		files: [{
			expand: true,
			cwd: 'src/assets',
			src: ['img/**', 'fonts/**'],
			dest: 'dist/assets',
		},
	]},
	jsVendor: {
		files: [{
			expand: true,
			cwd: 'src/assets/js/vendor',
			src: '**',
			dest: 'dist/assets/js/vendor',
		},
	]},
	jsScripts: {
		files: [{
			expand: true,
			cwd: 'src/assets/js/scripts',
			src: '**',
			dest: 'dist/assets/js/scripts',
		},
	]},
}