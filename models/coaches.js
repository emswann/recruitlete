const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const Contact = require("./contact");
const Name    = require("./name");
const Address = require("./address");
const College = require("./college");

const coachesSchema = new Schema({
  email           : { type: String, lowercase: true, unique: true, required: true },  
  contact         : Contact.schema,
  name            : Name.schema,
  address         : Address.schema,
  position        : { type: String, trim: true },
  accomplishments : { type: String, trim: true },
  colleges        : [{
    info          : College.schema,
    saveDate      : { type: Date, default: Date.now }
  }]
}, { timestamps: true });

const Coaches = mongoose.model("Coaches", coachesSchema);

module.exports = Coaches;
