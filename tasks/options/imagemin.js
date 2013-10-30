module.exports = {
	options: {
		optimizationLevel: 3,
	},
	files: {
		expand: true,
		cwd: 'dist/',
		src: '**/*.{png,jpg,gif}',
		dest: 'dist/'
	}
}