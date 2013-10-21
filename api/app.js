var express = require('express'), 
	routes = require('./routes'),
	http = require('http'),
	path = require('path'),
	app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);

app.get('/ref', function (req, res) {

	var fs = require('fs-extra')

	var file = './src/assets/styl/screen.styl'

	content = '\n.ref1 {\n\tleft: 100px;\n\ttop: 100px;\n}'

	fs.createFile(file, function (err) {
		if (err) {
			console.log(err);
		}
		else {
			fs.appendFile(file, content, function (err) { 
				if (err) {
					console.log(err);
				}
				else {
					res.send(200);
				}
			});
		}
	});

});


http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});