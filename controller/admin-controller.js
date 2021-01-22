var passport = require('passport');
var AdminDao = require('../dao/admin-dao');

module.exports = {
    loadAdminInfo: (req, res) => {
        res.render('admin-info', { user: req.user });
    },
    loadLogin: (req, res) => {
        res.render('login', { layout: 'login-layout' });
    },
    login: (req, res, next) => {
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/users/login',
            failureFlash: true
        })(req, res, next);
    },
    logout: (req, res) => {
        req.logout();
        req.flash('success_msg', 'Bạn đã đăng xuất');
        res.redirect('/users/login');
    },
    update: async (req, res) => {
        await AdminDao.update(req.user._id, req.body.name);
        res.redirect('/users/admin-info');
    }
}