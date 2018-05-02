const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const nameSchema = new Schema({
  first : { type: String, trim: true },
  middle: { type: String, trim: true },
  last  : { type: String, trim: true }
}, { _id: false });

const Name = mongoose.model("Name", nameSchema);

module.exports = Name;
