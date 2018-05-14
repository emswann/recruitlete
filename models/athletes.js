const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const Contact = require("./contact");
const Name    = require("./name");
const Address = require("./address");
const College = require("./college");
const Recruit = require("./recruit");

const athletesSchema = new Schema({
  email           : { type: String, lowercase: true, unique: true, required: true },   
  contact         : Contact.schema,
  name            : Name.schema,
  address         : Address.schema,
  parentNames     : { type: String, trim: true },
  jerseyNum       : { type: Number },
  gradYear        : { type: Number },
  position        : { type: String, trim: true },
  ncaaId          : { type: String, trim: true },  
	birthDate       : { type: String, trim: true }, 
  scholastic      : {
    weightGPA     : { type: Number },
    unweightGPA   : { type: Number },
    classRank     : { type: Number },
    classSize     : { type: Number },
    scoreSAT      : { type: Number },
    scoreACT      : { type: Number },
    major         : { type: String, trim: true }
  },
  club            : {
    name          : { type: String, trim: true },
    team          : { type: String, trim: true },
    director      : Name.schema,
    coach         : Name.schema,
    address       : Address.schema,
    contact       : Contact.schema
  },
  highSchool      : {
    name          : { type: String, trim: true },
    coach         : Name.schema,
    address       : Address.schema,
    contact       : Contact.schema
  },
  statistics      : {
    height        : { type: String, trim: true },
    weight        : { type: String, trim: true },
    handed        : { type: String, trim: true },
    standReach    : { type: String, trim: true }, 
    approachTouch : { type: String, trim: true }, 
    blockJump     : { type: String, trim: true }, 
  },
  athleteAccomps  : { type: String, trim: true }, 
  schoolAccomps   : { type: String, trim: true },
  videoLinks      : { type: String, trim: true },
  profileImg      : { data: Buffer, contentType: String },
  colleges        : [{
    info          : College.schema,
    progress      : Recruit.schema,
    saveDate      : { type: Date, default: Date.now }
  }]
}, { timestamps: true });

const Athletes = mongoose.model("Athletes", athletesSchema);

module.exports = Athletes;
