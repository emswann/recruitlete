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

const ClientManager = require("./ClientManager");
const ChatroomManager = require("./ChatroomManager");
const makeHandlers = require("./handlers");

const clientManager = ClientManager();
const chatroomManager = ChatroomManager();

io.on("connection", client => {
  const {
    handleRegister,
    handleJoin,
    handleLeave,
    handleMessage,
    handleGetChatrooms,
    handleGetAvailableUsers,
    handleDisconnect
  } = makeHandlers(client, clientManager, chatroomManager)

  console.log(`Client connected: ${client.id}`);

  clientManager.addClient(client);

  client.on("register", handleRegister);

  client.on("join", handleJoin);

  client.on("leave", handleLeave);

  client.on("message", handleMessage);

  client.on("chatrooms", handleGetChatrooms);

  client.on("availableUsers", handleGetAvailableUsers);

  client.on("disconnect", () => {
    console.log(`Client disconnected: ${client.id}`);
    handleDisconnect();
  });

  client.on("error", err => {
    console.log(`Received error from client: ${client.id}`);
    console.log(err);
  });
})
