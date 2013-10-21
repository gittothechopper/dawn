exports.index = function (req, res) {
	res.render('index', { title: 'Express' });
};

exports.ref = function (req, res) {
	console.log('API REF');
};