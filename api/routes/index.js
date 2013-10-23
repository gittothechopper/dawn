exports.ref = function (req, res) {

	var data = req.body,
		left = data.position.x,
		top = data.position.y;

	res.send(200);


};