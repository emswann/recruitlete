const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const Contact = require("./contact");
const Name    = require("./name");
const Address = require("./address");

const athletesSchema = new Schema({
  userName        : { type: String, required: true, unique: true, 
                      trim: true, uppercase: true, minlength: 8 },  
  // Password criteria :
  // ^	          The password string will start this way
  // (?=.*[a-z])	The string must contain at least 1 lowercase alphabetical character
  // (?=.*[A-Z])	The string must contain at least 1 uppercase alphabetical character
  // (?=.*[0-9])	The string must contain at least 1 numeric character
  // (?=.[!@#\$%\^&])	The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
  // (?=.{8,})	The string must be eight characters or longer
  //  ^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})
  password        : { type: String, required: true, trim: true,
                      validate: {
                        validator: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                        message: "{VALUE} is not a valid password"
                      }
                    },  
  contact         : Contact.schema,
  name            : Name.schema,
  address         : Address.schema,
  parentNames     : { type: String, trim: true },
  jerseyNum       : { type: Number },
  gradYear        : { type: Number },
  positions       : [{ type: String, trim: true }],
  ncaaId          : { type: String, trim: true },  
	birthDate       : Date, 
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
    weight        : { type: Number },
    handed        : { type: String, enum: ["right", "left"] }, // or R, L?
    standReach    : { type: String, trim: true }, 
    approachTouch : { type: String, trim: true }, 
    blockJump     : { type: String, trim: true }, 
  },
  athleteAccomps  : [{ type: String, trim: true }], 
  schoolAccomps   : [{ type: String, trim: true }],
  videoLinks      : [{ type: String, trim: true }],
  profileImg      : { data: Buffer, contentType: String },
  createDate      : { type: Date, default: Date.now },
  modifyDate      : { type: Date, default: Date.now }
});

const Athletes = mongoose.model("Athletes", athletesSchema);

module.exports = Athletes;
