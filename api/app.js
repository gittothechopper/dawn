var express = require('express'), 
	routes = require('./routes'),
	http = require('http'),
	path = require('path'),
	cors = require('cors'),
	app = express();

var corsOptions = {
	origin: true
};

app.use(require("express-chrome-logger"));
app.use(express.bodyParser());
app.use(cors(corsOptions));
app.use(app.router);

app.get('/', function (req, res) {
	res.send(200);
});

app.post('/ref', function (req, res) {

	var resData = req.body.name;

	res.send(resData);
});

http.createServer(app).listen(3001);