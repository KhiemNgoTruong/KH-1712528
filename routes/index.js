var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello world' });
});
router.get('/formDK.hbs', function(req, res, next) {
  res.render('formDK');
});
router.get('/formDN.hbs', function(req, res, next) {
  res.render('formDN');
});
router.get('/refreshPassWord.hbs', function(req, res, next) {
  res.render('refreshPassWord');
});
router.get('/editInformation.hbs', function(req, res, next) {
  res.render('editInformation');
});
router.get('/cartManagement.hbs', function(req, res, next) {
  res.render('cartManagement');
});
router.get('/index.hbs', function(req, res, next) {
  res.render('index');
});
router.get('/history.hbs', function(req, res, next) {
  res.render('history');
});
router.get('/shipmentDetails.hbs', function(req, res, next) {
  res.render('shipmentDetails');
});
router.get('/products.hbs', function(req, res, next) {
  res.render('products');
});
router.get('/contact.hbs', function(req, res, next) {
  res.render('contact');
});
router.get('/single-page.hbs', function(req, res, next) {
  res.render('single-page');
});
router.get('/woman.hbs', function(req, res, next) {
  res.render('woman');
});
router.get('/man.hbs', function(req, res, next) {
  res.render('man');
});
router.get('/kid.hbs', function(req, res, next) {
  res.render('kid');
});
module.exports = router;
