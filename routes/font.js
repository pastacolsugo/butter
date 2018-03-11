var express = require('express');
var router = express.Router();
const path = require('path');

const fontPath = "../public/font/";

// to serve icons from the npm package
const materialIconsPath = "../node_modules/material-design-icons/iconfont";

// Serving DejaVu Mono Font
router.get ('/dejavumono', function (req, res, next) {
	res.sendFile(path.join(__dirname, fontPath, "DejaVuSansMono.ttf"));
});

router.get ('/dejavumono-bold', function (req, res, next) {
	res.sendFile(path.join(__dirname, fontPath, "DejaVuSansMono-Bold.ttf"));
});

router.get ('/dejavumono-oblique', function (req, res, next) {
	res.sendFile(path.join(__dirname, fontPath, "DejaVuSansMono-Oblique.ttf"));
});

router.get ('/dejavumono-boldoblique', function (req, res, next) {
	res.sendFile(path.join(__dirname, fontPath, "DejaVuSansMono-BoldOblique.ttf"));
});


// Serving Google Material Icons from the npm package material-design-icons
// using dynamic routing

// the route url has the parameter ':format'
router.get ('/MaterialIcons-Regular:format', function (req, res, next) {
	// accessing the requested format from the request parameters
	let format = req.params.format;	

	// list of possible formats
	const allowedFormats = [".ttf", ".woff", ".woff2", ".eot"];

	// check if the requested format matches one of the available
	for (let i=0; i<allowedFormats.length; i++) {
		if (allowedFormats[i] === format) {
			// join the path with the correct file extension
			// and send the file
			res.sendFile (path.join (__dirname, materialIconsPath, 'MaterialIcons-Regular'+format));
			return;
		}
	}

	// if the format is not valid, send a 404
	res.status(404);
});

// router.get ('/MaterialIcons-Regular.woff2', function(req, res, next) {
// 	res.sendFile (path.join (__dirname, materialIconsPath, 'MaterialIcons-Regular.woff2'));
// });

module.exports = router;
