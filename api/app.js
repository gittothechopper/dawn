var express = require('express'), 
	routes = require('./routes'),
	http = require('http'),
	path = require('path'),
	app = express();

app.use(require("express-chrome-logger"));
app.use(express.bodyParser());
app.use(app.router);

app.get('/', function (req, res) {
	res.send(200);
});

app.get('/ref', function (req, res) {
	var fs = require('fs-extra'),
		file = './src/assets/styl/screen.styl';

	// 	x = req.body.x;

	// content = '\n.ref1 {\n\tleft: '+x+'px;\n\ttop: 100px;\n}';

	// fs.createFile(file, function (err) {
	// 	if (err) { console.log(err); }
	// 	else {
	// 		fs.appendFile(file, content, function (err) { 
	// 			if (err) { console.log(err); }
	// 			else { res.send(200); }
	// 		});
	// 	}
	// });

	var x = req.param.x;

	res.send(req.query.callback+'({success:true, x:'+x+'});'); 
});

http.createServer(app).listen(3001);