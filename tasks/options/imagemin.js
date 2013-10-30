module.exports = {
	options: {
		optimizationLevel: 1,
	},
	files: {
		expand: true,
		cwd: 'dist/',
		src: '**/*.{png,jpg,gif}',
		dest: 'dist/'
	}
}