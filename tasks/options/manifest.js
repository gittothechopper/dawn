module.exports = {
	generate: {
		options: {
			basePath: 'app/',
			network: ['http://*', 'https://*'],
			preferOnline: true,
			verbose: true,
			timestamp: true,
			hash: true,
			master: ['index.html']
		},
		src: ['*.*', '**/*.*'],
		dest: 'app/manifest.appcache'
	}
}