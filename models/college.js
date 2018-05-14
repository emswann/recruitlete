const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const Contact = require("./contact");
const Name    = require("./name");
const Address = require("./address");

const validator = require("validator");

const collegeSchema = new Schema({
  name          : { type: String, required: true, trim: true },  
  conference    : { type: String, trim: true },
  division      : { type: String, trim: true, uppercase: true,
                    enum: ["I", "II", "III"] },
  state         : { type: String, trim: true, uppercase: true,
                    enum: ["AL","AK","AS","AZ","AR","CA","CO","CT","DE","DC",
                           "FM","FL","GA","GU","HI","ID","IL","IN","IA","KS",
                           "KY","LA","ME","MH","MD","MA","MI","MN","MS","MO",
                           "MT","NE","NV","NH","NJ","NM","NY","NC","ND","MP",
                           "OH","OK","OR","PW","PA","PR","RI","SC","SD","TN",
                           "TX","UT","VT","VI","VA","WA","WV","WI","WY" ] },
  region        : { type: String, trim: true },
  collegeLink   : { type: String, trim: true,
                    validate: {
                      validator: validator.isURL,
                      message  : "{VALUE} is not a valid website",
                      isAsync  : false
                    }
                  },
  conferenceLink: { type: String, trim: true,
                    validate: {
                      validator: validator.isURL,
                      message  : "{VALUE} is not a valid website",
                      isAsync  : false
                    }
                  },
  favorite:       { type: Boolean, default: false
                  },
  notes:          [{ type: String, trim: true }],
  contactInfo   : {
    name        : Name.schema,
    contact     : Contact.schema,
    address     : Address.schema
  }
}, { _id: false });

const College = mongoose.model("College", collegeSchema);

module.exports = College;
