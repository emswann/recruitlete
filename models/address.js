const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const addressSchema = new Schema({
  street1: { type: String, trim: true },
  street2: { type: String, trim: true },
  city   : { type: String, trim: true },
  state  : { type: String, trim: true, uppercase: true,
             enum: ["AL","AK","AS","AZ","AR","CA","CO","CT","DE","DC",
                    "FM","FL","GA","GU","HI","ID","IL","IN","IA","KS",
                    "KY","LA","ME","MH","MD","MA","MI","MN","MS","MO",
                    "MT","NE","NV","NH","NJ","NM","NY","NC","ND","MP",
                    "OH","OK","OR","PW","PA","PR","RI","SC","SD","TN",
                    "TX","UT","VT","VI","VA","WA","WV","WI","WY" ]},
  zip    : { type: String, trim: true } 
}, { _id: false });

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;
