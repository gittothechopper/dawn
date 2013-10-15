module.exports = {
	options: {
		offline: '<%= offlineState %>',
		production: true,
		data: './src/**/*.{json,yml}',
		assets: 'app/assets',
		helpers: './src/helpers/helper-*.js',
		layoutdir: './src/templates/layouts',
		partials: ['./src/templates/includes/**/*.hbs'],
	},
	site: {
		options: {
			layout: 'default.hbs'
		},
		files: [{
			expand: true,
			cwd: 'src/templates/pages',
			src: ['*.*'],
			dest: 'app/'
		},
	]},
}