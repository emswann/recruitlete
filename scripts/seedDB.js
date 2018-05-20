const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/recruitlete"
);

const chatroomSeed = [
  { room: "1", name: "Room 1", users: [] },
  { room: "2", name: "Room 2", users: [] },
  { room: "3", name: "Room 3", users: [] },
  { room: "4", name: "Room 4", users: [] },
  { room: "5", name: "Room 5", users: [] }
];

db.Chatrooms
  .remove({})
  .then(() => db.Chatrooms.collection.insertMany(chatroomSeed))
  .then(data => {
    console.log(data.insertedCount + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
