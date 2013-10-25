module.exports = {
	options: {
		optimizationLevel: 1,
	},
	files: {
		expand: true,
		cwd: 'src/',
		src: '**/*.{png,jpg,gif}',
		dest: 'dist/'
	}
}