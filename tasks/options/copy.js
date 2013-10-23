module.exports = {
	img: {
		files: [{
			expand: true,
			cwd: 'src/assets',
			src: ['img/**', 'fonts/**'],
			dest: 'app/assets',
		},
	]},
	jsVendor: {
		files: [{
			expand: true,
			cwd: 'src/assets/js/vendor',
			src: '**',
			dest: 'app/assets/js/vendor',
		},
	]},
	jsScripts: {
		files: [{
			expand: true,
			cwd: 'src/assets/js/scripts',
			src: '**',
			dest: 'app/assets/js/scripts',
		},
	]},
}