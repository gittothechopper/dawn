exports.ref = function (req, res) {

	// modules
	var fs = require('fs-extra');

	// request
	var data = req.body,
		page = data.page,
		reference = data.reference,
		positionX = data.position.x,
		positionY = data.position.y;

	res.send(200);

};