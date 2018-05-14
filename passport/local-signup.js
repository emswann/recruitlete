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
 
    // Create values/space for the profile related subschemas to make it easier 
    // for profile functionality.
    let dbObj = {};
    if (userData.role === "athlete") {
      dbObj = { email: userData.email,
                contact: {},
                name: {},
                address: {},
                scholastic: { major : "" },
                club: {
                  name: "",
                  team: "",
                  director: {},
                  coach: {},
                  address: {},
                  contact: {}
                },
                highSchool: {
                  name: "",
                  coach: {},
                  address: {},
                  contact: {}                  
                },
                statistics: { height: "" }
              }
    }
    else {
      dbObj = { email: userData.email,
                contact: {},
                name: {},
                address: {}
              }      
    };

    db[collection].create(dbObj, (err, profile) => {
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
