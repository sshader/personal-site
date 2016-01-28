var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { background: 'index', title: 'Sarah Shader' });
});

router.get('/experience', function(req, res, next) {
	res.render('experience', { background: 'experience', 
		title: 'Sarah Shader' });
});

router.get('/contact', function(req, res, next) {
	res.render('contact', { background: 'contact', 
		title: 'Sarah Shader' });
});

router.get('/psetbuddies', function(req, res, next) {
	res.render('psetbuddies', { background: 'psetbuddies', 
		title: 'Sarah Shader' });
});

router.get('/rsi', function(req, res, next) {
	res.render('rsi', { background: 'rsi', 
		title: 'Sarah Shader' });
});

module.exports = router;
