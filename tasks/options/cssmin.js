module.exports = {
	minify: {
		expand: true,
		cwd: 'app/assets/css',
		src: ['*.css', '!*.min.css'],
		dest: 'app/assets/css',
		ext: '.css'
	}
}