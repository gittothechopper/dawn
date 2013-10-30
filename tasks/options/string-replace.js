module.exports = {
	irep: {
		files: [{
			expand: true,
			cwd: 'dist/',
			src: '*.html',
			dest: 'dist/',
		}],
		options: {
			replacements: [{
			pattern: /a *href="([^"]*).html"/,
			replacement: 'a href="veeva:gotoSlide($1.zip)"'
			}],
		}	
	}
}