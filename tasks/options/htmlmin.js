module.exports = {
	options: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,        
   	},
	files: {
		expand: true,
		cwd: 'app/',
		src: '**/*.html',
		dest: 'app/'
	}
}