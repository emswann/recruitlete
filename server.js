const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const routes = require("./routes");
const app = express();

const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// pass the passport middleware
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require("./passport/local-signup");
const localLoginStrategy = require("./passport/local-login");
passport.use("local-signup", localSignupStrategy);
passport.use("local-login", localLoginStrategy);

// pass the authenticaion checker middleware   ---comment back in for auth, out for postman
// const authCheckMiddleware = require("./middleware/auth-check");
// app.use("/api", authCheckMiddleware);

// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/recruitlete");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
