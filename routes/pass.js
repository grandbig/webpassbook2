
/*
 * POST passbook data.
 */

var request = require('request');
//var url = "http://fy11-dev.cloudapp.net/hoge";
var url = "http://createpassbook.cloudapp.net:3003/hoge";

exports.sendData = function(req, res) {
	console.log(req);
	console.log(req.params);
	console.log(req.url);
	console.log(req.headers);
	console.log(req.body);

	var authorization = req.headers.authorization.replace("ApplePass ", "");

	request.post({
		url: url,
		form: {
			params: {
				deviceLibraryID: req.params.a,
				passTypeID: req.params.b,
				serialNumber: req.params.c,
				pushToken: req.body.pushToken,
				authorization: authorization
			}
		}
	}, function(err, response, body) {
 		res.send("respond with a resource");
	});
};
