const jwt = require("jsonwebtoken");
const db  = require("../models");
const PassportLocalStrategy = require("passport-local").Strategy;
const config = require("../config");

/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
  usernameField: "email",
  passwordField: "password",
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const userData = {
    email: email.trim().toLowerCase(),
    password: password.trim(),
    role: req.body.role.trim().toLowerCase()
  };

  // find a user by email address
  return db.Users.findOne({ email: userData.email }, (err, user) => {
    if (err) { return done(err); }

    if (!user) {
      const error = new Error("Email cannot be found!");

      return done(error);
    }

    if (user.role !== userData.role) {
      const error = new Error("Role does not match email!");

      return done(error);
    }

    // check if a hashed user"s password is equal to a value saved in the database
    return user.comparePassword(userData.password, (passwordErr, isMatch) => {
      if (err) { return done(err); }

      if (!isMatch) {
        const error = new Error("Invalid password!");

        return done(error);
      }

      const payload = {
        sub: user._id
      };

      // create a token string
      const token = jwt.sign(payload, config.jwtSecret);
      const data = {
        email: user.email,
        role: user.role
      };

      return done(null, token, data);
    });
  });
});
