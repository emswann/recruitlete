const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const recruitSchema = new Schema({
  contactEmail    : { type: Boolean, default: false },
  contactPhone    : { type: Boolean, default: false },
  sentVideo       : { type: Boolean, default: false },
  sentSchedule    : { type: Boolean, default: false },
  fillQuestion    : { type: Boolean, default: false },
  attendCamp      : { type: Boolean, default: false },
  attendUnOffVisit: { type: Boolean, default: false },
  attendOffVist   : { type: Boolean, default: false },
  researchCollege : { type: Boolean, default: false },
  applyCollege    : { type: Boolean, default: false }
}, { _id: false });

const Recruit = mongoose.model("Recruit", recruitSchema);

module.exports = Recruit;
