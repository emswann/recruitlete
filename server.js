const express = require("express");
const sslRedirect = require('heroku-ssl-redirect');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const routes = require("./routes");
const app = express();

const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// enable ssl redirect
app.use(sslRedirect());

// pass the passport middleware
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require("./passport/local-signup");
const localLoginStrategy = require("./passport/local-login");
passport.use("local-signup", localSignupStrategy);
passport.use("local-login", localLoginStrategy);

// pass the authentication checker middleware
const authCheckMiddleware = require("./middleware/auth-check");
app.use(/^\/api\/((?!(articles)).)*$/, authCheckMiddleware);

// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/recruitlete");

// Start the API server
const server = app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// Chatroom functionality.
const io = require("socket.io")(server);

io.on("connection", socket => {
  console.log(`User connected: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });

  socket.on("ENTER_ROOM", data => {
    socket.join(data.room);
    data.message = `${data.username} has joined.`;
    socket.to(data.room).emit("RECEIVE_MESSAGE", data);
  });

  socket.on("LEAVE_ROOM", data => {
    socket.leave(data.room);
    data.message = `${data.username} has left.`;
    socket.to(data.room).emit("RECEIVE_MESSAGE", data);
  });

  socket.on("SEND_MESSAGE", data => {
    io.in(data.room).emit("RECEIVE_MESSAGE", data);
  });
      
  socket.on("error", err => {
    console.log(`Received error from user: ${socket.id}`);
    console.log(err);
  });
})
