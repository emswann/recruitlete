const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const Contact = require("./contact");
const Name    = require("./name");
const Address = require("./address");
const College = require("./college");

const coachesSchema = new Schema({
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
  position        : { type: String, trim: true },
  accomplishments : [{ type: String, trim: true }],
  colleges        : [{
    info          : College.schema,
    saveDate      : { type: Date, default: Date.now }
  }],
  createDate      : { type: Date, default: Date.now },
  modifyDate      : { type: Date, default: Date.now }
});

const Coaches = mongoose.model("Coaches", coachesSchema);

module.exports = Coaches;
