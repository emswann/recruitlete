const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const chatroomsSchema = new Schema({
  room  : { type: String, lowercase: true, unique: true, required: true },   
  name  : { type: String, trim: true },
  users : [{ type: String, trim: true }]
});

const Chatrooms = mongoose.model("Chatrooms", chatroomsSchema);

module.exports = Chatrooms;
