var express = require('express');
var router = express.Router();

var adminController = require('../controller/admin-controller');
var { ensureAuthenticated } = require('../config/auth');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Admin info
router.get('/admin-info', ensureAuthenticated, adminController.loadAdminInfo);

// Login page
router.get('/login', adminController.loadLogin);

// Login
router.post('/login', adminController.login);

// Logout
router.get('/logout', adminController.logout);

// Update
router.post('/update', adminController.update);

module.exports = router;
