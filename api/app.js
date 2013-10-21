var express = require('express'), 
	routes = require('./routes'),
	http = require('http'),
	path = require('path'),
	app = express();

app.use(app.router);

app.get('/', function (req, res) {
	res.send(200);
});

app.get('/ref', function (req, res) {
	var fs = require('fs-extra'),
		file = './src/assets/styl/screen.styl';

	content = '\n.ref1 {\n\tleft: 100px;\n\ttop: 100px;\n}'
	fs.createFile(file, function (err) {
		if (err) { console.log(err); }
		else {
			fs.appendFile(file, content, function (err) { 
				if (err) { console.log(err); }
				else { res.send(200); }
			});
		}
	});

});

http.createServer(app).listen(3001);