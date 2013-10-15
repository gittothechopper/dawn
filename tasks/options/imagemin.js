module.exports = {
	options: {
		optimizationLevel: 3,
	},
	files: {
		expand: true,
		cwd: 'src/',
		src: '**/*.{png,jpg,gif}',
		dest: 'app/'
	}
}