const jwt = require("jsonwebtoken");
const db  = require("../models");
const PassportLocalStrategy = require("passport-local").Strategy;
const config = require("../config");

/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const userData = {
    email: email.trim().toLowerCase(),
    password: password.trim(),
    role: req.body.role.trim().toLowerCase()
  };

  db.Users.create(userData, (err, user) => {
    if (err) { return done(err); }

    const payload = {
      sub: user._id
    };

    // create a token string
    const token = jwt.sign(payload, config.jwtSecret);
    const data = {
      name: user.name
    };

    return done(null, token, data);
  });
});
