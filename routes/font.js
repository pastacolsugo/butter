var express = require('express');
var router = express.Router();
const path = require('path');

const fontPath = "../public/font/";

router.get('/dejavumono', function(req, res, next) {
	res.sendFile(path.join(__dirname, fontPath, "DejaVuSansMono.ttf"));
});

router.get('/dejavumono-bold', function(req, res, next) {
	res.sendFile(path.join(__dirname, fontPath, "DejaVuSansMono-Bold.ttf"));
});

router.get('/dejavumono-oblique', function(req, res, next) {
	res.sendFile(path.join(__dirname, fontPath, "DejaVuSansMono-Oblique.ttf"));
});

router.get('/dejavumono-boldoblique', function(req, res, next) {
	res.sendFile(path.join(__dirname, fontPath, "DejaVuSansMono-BoldOblique.ttf"));
});

module.exports = router;
