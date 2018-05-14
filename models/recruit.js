const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const recruitSchema = new Schema({
  "Sent E-Mail to coach"      : { type: Boolean, default: false },
  "Called coach"              : { type: Boolean, default: false },
  "Sent skills video"         : { type: Boolean, default: false },
  "Sent schedule"             : { type: Boolean, default: false },
  "Filled out questionnaire"  : { type: Boolean, default: false },
  "Attended camp"             : { type: Boolean, default: false },
  "Attended unofficial visit" : { type: Boolean, default: false },
  "Attended official visit"   : { type: Boolean, default: false },
  "Researched college"        : { type: Boolean, default: false },
  "Applied to college"        : { type: Boolean, default: false }
}, { _id: false });

const Recruit = mongoose.model("Recruit", recruitSchema);

module.exports = Recruit;
