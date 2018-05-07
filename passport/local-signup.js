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

    const collection = 
      userData.role === "athlete" ? "Athletes" : "Coaches";

    db[collection].create({ email: userData.email }, (err, profile) => {
      if (err) { return done(err); }

      const payload = {
        sub: user._id // use original user data for payload.
      };

      // create a token string
      const token = jwt.sign(payload, config.jwtSecret);
      const data = {
        email: user.email, //use original user data.
        role: user.role
      };

      return done(null, token, data);
    });
  });
});
