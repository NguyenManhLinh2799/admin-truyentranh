var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var adminDao = require('../dao/admin-dao');
var adminModel = require('../model/admin-model');

module.exports = passport => {
    passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
        try
        {
            var user = await adminDao.getByEmail(email);
            if (!user) {
                return done(null, false, { message: 'Email không tồn tại' });
            }
            else if (user.password == password) {
                return done(null, user);
            }
            else {
                return done(null, false, { message: 'Mật khẩu không đúng' });
            }
        }
        catch (err)
        {
            console.log(err);
        }
    }));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        var user = await adminDao.get(id);
        done(null, user);
    });
}